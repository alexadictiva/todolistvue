/*agregar al to do list con vue*/

let valores = document.getElementById("valores");
let app7 = new Vue({
  el: "#app-7",
  data: {
    mensaje: "",
    tareas: [],
  },
  created: function () {
    this.tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  },
  methods: {
    agregarTarea: function () {
      if (this.mensaje == "") {
        alert("Agrega una tarea válida");
      } else {
        this.tareas.push(this.mensaje);
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
        this.mensaje = "";
      }
    },
    mostrarTarea: function () {
      let datos = JSON.parse(localStorage.getItem("tareas"));
      if (datos == null) {
        this.tareas = [];
      } else {
        this.tareas = datos;
      }
    },

    eliminarTarea: function (index) {
      this.tareas.splice(index, 1);
      localStorage.setItem("tareas", JSON.stringify(this.tareas));
    },
  },
});
