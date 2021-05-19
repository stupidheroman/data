const fs = require('fs')
const path = require('path')
const faker = require('faker')

class Course {
    constructor(fullname, age, job, image) {
        this.fullname = fullname
        this.age =  age
        this.job = job
        this.image = faker.image.avatar()
    }

    toJSON() {
        return {
            fullname: this.fullname,
            age: this.age,
            job: this.job,
            image: this.image
        }
    }

    async save() {
        const courses = await Course.getAll()
        courses.push(this.toJSON())
        return new Promise(((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'data.json'),
                JSON.stringify(courses),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        }))
    }

    static getAll() {
        return new Promise(((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'data.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        }))
    }
}

module.exports = Course