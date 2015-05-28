﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spitfire.Domain
{
    public class Address
    {
        public int Address_ID { get; set; }
        public string StreetNumber { get; set; }
        public string Route { get; set; }
        public string Locality { get; set; }
        public string AdministrativeArea { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
    }
}