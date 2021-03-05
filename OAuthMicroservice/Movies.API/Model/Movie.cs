﻿using System;

namespace Movies.API.Model
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string  Genre { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Owner { get; set; }
    }
}
