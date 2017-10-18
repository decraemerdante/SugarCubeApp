using System;
using System.Collections.Generic;

namespace MyDiabetesAPI.Entities
{
    public partial class Setting
    {
        public int Id { get; set; }
        public int Bolus { get; set; }
        public int Basal { get; set; }
    }
}
