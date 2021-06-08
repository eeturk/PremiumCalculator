using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PremiumCalculator.Models
{
    public class Premium
    {
        public string Name { get; set; }
        public decimal Age { get; set; }
        public DateTime DOB { get; set; }
        public string Occupation { get; set; }
        public string SumInsured { get; set; }
    }
}