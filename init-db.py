import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config, Logger
from flaskr.models import db, Settings, Stats
from flaskr import create_app

print('Setup started (log to {0})'.format(Logger.LOG_FILENAME))
Logger.logger.debug('Setup started')

database_file = Config.SQLALCHEMY_DATABASE_FILENAME
if os.path.exists(database_file):
    Logger.logger.debug('Remove DB {0}'.format(database_file))
    os.remove(database_file)

app = create_app()
with app.test_request_context():
    app.config.from_object(Config)
    db.init_app(app)
    Logger.logger.debug('Create DB {0}'.format(database_file))
    db.create_all()

    Logger.logger.debug('Populate Settings DB {0}'.format(database_file))
    settings = Settings(
                temperatureUm = '°C', 
                humidityUm = '%',
                pressureUm = 'mBar',
                readFromSensorInterval = 10, 
                minDeltaDataTrigger = 0.5, 
                temperatureCorrection = 0.0, 
                humidityCorrection = 0, 
                pressureCorrection = 0,
                storeStatsDataLimit = 0,
                showLastEvent = False
                )
    db.session.add(settings)

    Logger.logger.debug('Populate Stats DB {0}'.format(database_file))
    stats = Stats(
                temperature = 0.0, 
                humidity = 0, 
                pressure = 0,
                temperatureUm = '°C', 
                humidityUm = '%',
                pressureUm = 'mBar',
                sensorSimulation = False 
                )
    db.session.add(stats)

    db.session.commit()

Logger.logger.debug('Setup completed')
print('Setup completed')

exit()