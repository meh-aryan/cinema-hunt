import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: [String],
      required: true,
      trim: true,
      index: true,
    },
    language: {
      type: [String],
      required: true,
      trim: true,
    },
    pictureQuality: { type: [String], required: true },
    durationMinutes: {
      type: Number,
      required: true,
      min: 1,
    },
    isReleased: {
      type: Boolean,
      required: true,
      index: true,
    },
    releaseDate: {
      type: Date,
      default: null,
      validate: {
        validator: function (value) {
          // console.log(this);
          return !this.isReleased || value !== null;
        },
        message: "Released movies must have a release date",
      },
      index: true,
    },
    cinemaRating: {
      type: String,
      enum: ["U", "U/A 7+", "U/A 13+", "U/A 16+", "A", "S"],
      required: true,
    },
    userRating: {
      type: [
        {
          userId: { type: Schema.Types.ObjectId, ref: "User" },
          rating: { type: Number, min: 1, max: 10, required: true },
          message: { type: String, default: "", trim: true },
          createdAt: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
    averageRating: {
      type: Number,
      min: 1,
      max: 10,
      default: null,
    },
    trailerUrl: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

movieSchema.pre("save", function (next) {
  if (!this.isModified("userRating")) {
    return next();
  }

  if (!this.userRating || this.userRating.length === 0) {
    this.averageRating = null;
    return next();
  }

  const total = this.userRating.reduce((sum, r) => sum + r.rating, 0);

  this.averageRating = Number((total / this.userRating.length).toFixed(1));

  next();
});

const Movie = model("Movie", movieSchema);

export default Movie;
