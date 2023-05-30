# shapeAPI Backend

## Backend Setup and get started with the database part, follow the steps below:

### Database Part:

1. Start by running the following command to run a MySQL Docker container:
```bash
docker run -itd --name mysql-cat -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql
```
- This command will pull the MySQL Docker image and run a container named "mysql-cat" with port mapping.

- Wait for the Docker image to be pulled and the container to start successfully.

2. Access the MySQL container by running the following command:
```bash
mysql -h 127.0.0.1 -u root -p
```
- Enter the password `root` when prompted to log in to the MySQL server.

3. Once logged in successfully, create a new database named "cat" by running the following command:
```sql
CREATE DATABASE cat;
```
- Exit the MySQL shell by typing `exit`.

### Backend Part:
1. Navigate to the "backend" directory and run the following command to install the required dependencies:
```bash
cd backend
pnpm install
```
2. After the installation is complete, start the backend server by running the following command:
```bash
pnpm run start
```
- Make sure the backend starts without any errors.

Once the backend is running correctly, you can access the Swagger API documentation by visiting http://localhost:3000/api
