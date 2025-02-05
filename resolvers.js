import { users, quots } from "./fakedb.js"
import { randomBytes } from 'crypto'
//resolver - function that returns the data for the query brain of the operation
 const resolvers = {
    Query: {
        users: () => users,
        user: (parent, args) => users.find(user => user.id === args.id),
        quots: () => quots,
        quotsByUser: (parent, args) => quots.filter(quot => quot.by === args.by)
    },
    UserType: {
        quots(parent) {
            return quots.filter(quot => quot.by === parent.id)
        }
    },
    Mutation: {
        addUser: (parent, args) => {
            const newUser = {
                id: randomBytes(5).toString('hex'),
                name: args.name,
                email: args.email,
                password: args.password
            }
            users.push(newUser)
            return users.find(user => user.id === newUser.id)
        }
    }

}

export default resolvers