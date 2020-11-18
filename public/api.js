const API = {
  async getLastWorkout() {
    let res;
    try {
      //if there is no method default as get route
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  // Kerem commented out
  // async addExercise(data) {
  //   const id = location.search.split("=")[1];
  //   //req.params.id
  //   const res = await fetch("/api/workouts/" + id, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data)
  //   });
  //   const json = await res.json();

  //   return json;
  // },

  //Kerem added
  async addCardioExercise(data) {
      const id = location.search.split("=")[1];
      //req.params.id
      const res = await fetch("/api/workouts/cardio/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

    const json = await res.json();

    return json;
  },
   //Kerem added
   async addResistanceExercise(data) {
    const id = location.search.split("=")[1];
    //req.params.id
    const res = await fetch("/api/workouts/resistance/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
