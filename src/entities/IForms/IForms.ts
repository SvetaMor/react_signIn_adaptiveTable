export interface IField
{
    label: string,
    input: any
}

export interface ITextField extends IField
{   
    meta: {
        invalid: any,
        error: any,
        touched:any
    }
};

export interface IRow {
    id: string;
    img: string;
    name: string;
    count: string;
    price: string;
    cost: string;
    showResults: boolean;
  }