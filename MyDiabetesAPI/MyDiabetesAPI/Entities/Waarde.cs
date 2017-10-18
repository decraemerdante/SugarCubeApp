using System;
using System.Collections.Generic;

namespace MyDiabetesAPI.Entities
{
    public partial class Waarde
    {
        public int Id { get; set; }
        public int Waarde1 { get; set; }
        public int? Insuline { get; set; }
        public string Type { get; set; }
        public DateTime Moment { get; set; }
    }
}
