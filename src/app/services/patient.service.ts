import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { firestore } from './firebase';

export interface Patient {
  id?: string;
  name: string;
  email: string;
  age: number;
  gender: 'Female' | 'Male' | 'Other';
  status: 'Active' | 'Follow-up' | 'Discharged';
  notes: string;
  order: number;
}

const patientsCollection = collection(firestore, 'patients');

@Injectable({ providedIn: 'root' })
export class PatientService {
  watchPatients(onChange: (patients: Patient[]) => void, onError: (error: Error) => void): () => void {
    return onSnapshot(
      patientsCollection,
      (snapshot) => {
        const patients = snapshot.docs.map((patient) => ({ id: patient.id, ...patient.data() } as Patient));
        patients.sort((first, second) => (first.order ?? 0) - (second.order ?? 0));
        onChange(patients);
      },
      onError,
    );
  }

  async addPatient(patient: Omit<Patient, 'id' | 'order'>): Promise<void> {
    await addDoc(patientsCollection, { ...patient, order: Date.now() });
  }

  async updatePatient(id: string, changes: Partial<Omit<Patient, 'id'>>): Promise<void> {
    await updateDoc(doc(firestore, 'patients', id), changes);
  }

  async deletePatient(id: string): Promise<void> {
    await deleteDoc(doc(firestore, 'patients', id));
  }
}
