import { create } from 'zustand'

type FormState = {
  nombrecompleto: string | null;
  dni: string | null;
  email: string | null;
  utmMedium: string | null;
  code: string | null;
  needsConfirm: boolean;
  pendingId: string | null;
  setNombrecompleto: (nombrecompleto: string) => void;
  setDnizustand: (dni: string) => void;
  setEmailzustand: (email: string) => void;
  setUtmMedium: (utm: string) => void;
  setCode: (code: string) => void;
  setNeedsConfirm: (needs: boolean) => void;
  setPendingId: (id: string | null) => void;
  // setOffer: (offer: Offer) => void;
}

const useFormStore = create<FormState>((set) => ({
  nombrecompleto: null,
  dni: null,
  email: null,
  utmMedium: typeof window !== 'undefined' ? localStorage.getItem('utm_medium') || null : null,
  code:
  typeof window !== 'undefined'
    ? localStorage.getItem('mf_code') || null
    : null,
  needsConfirm:
    typeof window !== 'undefined'
      ? (localStorage.getItem('mf_needsConfirm') === 'true')
      : false,
  pendingId:
    typeof window !== 'undefined'
      ? localStorage.getItem('mf_pendingId') || null
      : null,
  setNombrecompleto: (nombrecompleto: string) => set((state:any) => ({ nombrecompleto })),
  setDnizustand: (dni: string) => set((state:any) => ({ dni })),
  setEmailzustand: (email: string) => set((state:any) =>({ email })),
  setUtmMedium: (utm: string) => set({ utmMedium: utm }),
  setCode: (code: string) => {
    try { localStorage.setItem('mf_code', code); } catch {}
    set({ code });
  },
  setNeedsConfirm: (needs: boolean) => {
    try { localStorage.setItem('mf_needsConfirm', String(needs)); } catch {}
    set({ needsConfirm: needs });
  },
  setPendingId: (id: string | null) => {
    try {
      if (id) localStorage.setItem('mf_pendingId', id); else localStorage.removeItem('mf_pendingId');
    } catch {}
    set({ pendingId: id });
  },
  // setOffer: (offer: Offer) => set((state:any) => ({ offer })),

}))

export default useFormStore;