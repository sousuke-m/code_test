import os
import shutil
import datetime

path = './task1/data/'
files = os.listdir(path)

for filename in files:
    from_path = path + '/' + filename
    d = os.path.getmtime(from_path)
    dd = datetime.date.fromtimestamp(d)
    year = str(dd.year)
    to_path = path + '/' + year
    if not os.path.exists(to_path):
        os.mkdir(to_path)
    shutil.move(from_path, to_path)