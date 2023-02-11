import create from "zustand"

const Onnav = create((set)=>({
    nav : false,
    SetNav(bool){
      set(() => ({nav:bool}))
    },
  }))



export default Onnav;