
# Registration People API

The Registration People API is a CRUD for registering people, developed using Node.js, Express, and Sequelize for SQLite. It is written in TypeScript and includes Swagger documentation to facilitate integration.
## Requirements

- Node.js
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/carol8fml/registration-people.git
   cd registration-people
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and configure the database URL:
   ```env
   DATABASE_URL=sqlite:./database.sqlite
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

5. Access the API documentation in the browser:
   ```
   http://localhost:3000/api-docs
   ```

## Endpoints

### Get All Persons

- **URL**: `/persons`
- **Method**: `GET`
- **Description**: Returns a list of all registered persons.

### Create a New Person

- **URL**: `/persons`
- **Method**: `POST`
- **Description**: Creates a new person.
- **Request Body**:
   ```json
   {
     "name": "Carolina Gonçalves",
     "email": "contato.devcarolina@gmail.com",
     "phones": ["0000000"]
   }
   ```

### Update a Person

- **URL**: `/persons/:id`
- **Method**: `PUT`
- **Description**: Updates an existing person's information.
- **URL Parameters**: `id` - ID of the person to be updated.
- **Request Body**:
   ```json
   {
     "name": "Carolina Gonçalves",
     "email": "contato.devcarolina@gmail.com",
     "phones": ["0000000"]
   }
   ```

### Delete a Person

- **URL**: `/persons/:id`
- **Method**: `DELETE`
- **Description**: Deletes an existing person.
- **URL Parameters**: `id` - ID of the person to be deleted.

## License

This project is licensed under the MIT License.

## Author
Carolina Gonçalves

<a href="https://www.linkedin.com/in/carolina-gon%C3%A7alves-a23689198">![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=contato.devcarolina@gmail.com">![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a>

