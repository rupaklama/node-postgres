# bin directory contains executable files that you have in your system

# configuration & executable file for psql database
# sh extension (shell) is bash script file to execute multiple scripts

# Tell operating system, this is bash script specifically & to properly execute,
# add 'shebang' syntax on the top of the file to start with, note - it starts with #

#!/bin/bash

# to avoid entering password
# export PGPASSWORD='user_password'

# destructuring variable
database = "testdb"

# Using echo command, terminal output to say when the script is starting
echo "Configuring database: $database" # string interpolation

# clean up & start with fresh db evertime we run these scripts
dropdb -U monster testdb # username & our database
createdb -U monster testdb

# connecting user to database & 
# execute files with "configure": "./bin/configure_db.sh", command in package.json
# creating tables in db
psql -U monster testdb < ./bin/sql/monsters.sql

# terminal output to say when the script finishes
echo "$database configured"