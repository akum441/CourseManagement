
export const validateRequest = (courses) => {
    for (const course of courses) {
        const { id, name, members, coach_id, description } = course;
        if (!id || !name || !members || !coach_id || !description) {
            throw new Error("One or more course objects are missing required keys");
        }
    }
}

export const validateMembers = (courses) => {
    for (const course of courses) {
        let members:any =course.members;
    if (typeof members === "string") {
        throw new Error("Please supply members as an array");
      } else if (members instanceof Array && members.length==0) {
        throw new Error("Empty members");
      }}
}