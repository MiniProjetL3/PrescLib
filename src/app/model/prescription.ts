import { User } from './user';
import { Service } from './service';
import { Patient } from './patient';

export class Prescription {
    id: number;
    etat: boolean;
    patient: Patient;
    service: Service;
    medecin: User;
    secretaire: User;
    type_aliment: string;
    type_presc: string;
    dateP: Date;
    type:string;

    constructor() { }
}