import { create } from 'zustand'


type FormState = {
  nombrecompleto: string | null;
  setNombrecompleto: (nombrecompleto: string) => void;
  // setOffer: (offer: Offer) => void;

}

const useFormStore = create<FormState>((set) => ({
  nombrecompleto: null,

  setNombrecompleto: (nombrecompleto: string) => set((state:any) => ({ nombrecompleto })),
  // setOffer: (offer: Offer) => set((state:any) => ({ offer })),

}))

export default useFormStore;