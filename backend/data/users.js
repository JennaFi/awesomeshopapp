import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jhon',
        email: 'jhon@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
    {
        name: 'Mary',
        email: 'mary@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users