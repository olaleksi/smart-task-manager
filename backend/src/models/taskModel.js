// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Title is required"],
//       trim: true,
//       maxlength: [100, "Title cannot exceed 100 characters"],
//     },
//     description: {
//       type: String,
//       trim: true,
//       maxlength: [500, "Description cannot exceed 500 characters"],
//       default: "",
//     },
//     status: {
//       type: String,
//       enum: ["pending", "in-progress", "completed"],
//       default: "pending",
//     },
//     priority: {
//       type: String,
//       enum: ["low", "medium", "high"],
//       default: "medium",
//     },
//     dueDate: {
//       type: Date,
//       validate: {
//         validator: function (v) {
//             if (!v) return true; // Optional field: allow empty values

//             // Get the current date and set time to 00:00:00 (midnight)
//             const today = new Date();
//             today.setHours(0, 0, 0, 0);

//             // Compare the input date to the start of today
//             return v >= today;
//         },
//         message: "Due date must be in the future",
//       },
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
// },

//   {
//     timestamps: true, // Adds createdAt and updatedAt automatically
// },

// );

// // Index for better query performance
// taskSchema.index({ user: 1, status: 1, dueDate: 1 });

// // Virtual for checking if task is overdue
// taskSchema.virtual("isOverdue").get(function () {
//   return (
//     this.dueDate && this.dueDate < new Date() && this.status !== "completed"
//   );
// });

// // Ensure virtuals are included in JSON output
// taskSchema.set("toJSON", { virtuals: true });
// taskSchema.set("toObject", { virtuals: true });

// const Task = mongoose.model("Task", taskSchema);
// export default Task;

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Task = mongoose.model("Task", taskSchema);

export default Task;