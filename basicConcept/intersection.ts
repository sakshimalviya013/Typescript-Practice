type Admin={
    name: string;
    roles: string[];
};

type Employee={
    name: string;
    startDate: Date;
};

type SuperEmployee=Admin & Employee;

let emp: SuperEmployee ={
  name: 'Leela',
  roles:['admin'],
  startDate : new Date()

}
