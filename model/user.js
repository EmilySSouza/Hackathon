let iD = 0;

export class User{
    constructor(name,email,phone,team){
        this.id = iD + 1
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.team = team;
        iD += 1;
    }
}

