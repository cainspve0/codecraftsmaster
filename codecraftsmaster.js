// Create a class named CodeCraftsMaster
class CodeCraftsMaster {
    constructor() {
        this.skills = [];
    }

    // Method: learn a new skill
    learnSkill(skill) {
        this.skills.push(skill);
        console.log(`Learned a new skill: ${skill}`);
    }

    // Method: forget a skill
    forgetSkill(skill) {
        const index = this.skills.indexOf(skill);
        if (index !== -1) {
            this.skills.splice(index, 1);
            console.log(`Forgot the skill: ${skill}`);
        } else {
            console.log(`The skill ${skill} is not found.`);
        }
    }

    // Method: list all skills
    listSkills() {
        console.log("Skills of the CodeCraftsMaster:");
        this.skills.forEach(skill => {
            console.log(skill);
        });
    }
}

// Create an instance of CodeCraftsMaster named myCodeCraftsMaster
const myCodeCraftsMaster = new CodeCraftsMaster();

// Learn new skills
myCodeCraftsMaster.learnSkill("JavaScript");
myCodeCraftsMaster.learnSkill("Python");
myCodeCraftsMaster.learnSkill("SQL");

// List all skills
myCodeCraftsMaster.listSkills();

// Forget a skill
myCodeCraftsMaster.forgetSkill("Python");

// List all skills after forgetting
myCodeCraftsMaster.listSkills();
