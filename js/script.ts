interface IStudent {
    readonly name: string,
    surname: string,
    readonly id: number,
    course: number,
    adress: {
          city?: string,
          street: string
        }
    }

function getFormatedDate(timestamp: number): Date {
    return new Date(timestamp);
}