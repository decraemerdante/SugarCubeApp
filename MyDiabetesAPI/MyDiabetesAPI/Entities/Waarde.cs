﻿using System;
using System.Collections.Generic;

namespace MyDiabetesAPI.Entities
{
    public partial class Waarde
    {
        public int Id { get; set; }
        public int Waarde1 { get; set; }
        public int Bolus { get; set; }
        public int Basal { get; set; }
        public string Type { get; set; }
        public TimeSpan Time { get; set; }
        public DateTime Date { get; set; }
    }
}
