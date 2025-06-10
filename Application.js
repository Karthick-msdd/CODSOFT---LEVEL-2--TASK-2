const mongoose = require("mongoose");

const ApplicatonSchema = new mongoose.schema({
    jobId: { type: mongoose.schema.Types.objectId, ref: "job"},
    candidateId: { type: mongoose.schema.Types.objectId, ref: "User"},
    resumeUrl: string,
});

module.exports = mongoose.model("Application", ApplicationSchema);
