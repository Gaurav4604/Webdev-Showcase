import os

directories = list(filter(os.path.isdir, os.listdir(os.curdir)))

# print(directories)

fs = open('index.html', 'w')

boilerPlate = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
"""

boilerPlateEnd = """
</body>
</html>
"""

fs.writelines(boilerPlate)

for directory in directories:
    fs.write(f'<a href="https://gaurav4604.github.io/Webdev-Showcase/{directory}/" target="_blank">{directory}</a>\n')
    fs.write('<br>\n')

fs.writelines(boilerPlateEnd)
