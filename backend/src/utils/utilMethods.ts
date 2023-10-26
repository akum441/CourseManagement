
export const validateRequest = (courses, res) => {
    for (const course of courses) {
        const { id, name, members, coach_id, description } = course;
        if (!id || !name || !members || !coach_id || !description) {
            return res.status(400).send("One or more course objects are missing required keys");
        }
    }
}

export const validateMembers = (courses, res) => {
    for (const course of courses) {
        let members:any =course.members;
    if (typeof members === "string") {
        return res.status(400).send("Please supply members as an array");
      } else if (members instanceof Array && members.length==0) {
        return res.status(400).send("Empty members");
      }}
}