using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Week_6
{
    public class Ticket
    {
        private string _ticketNo;
        private DateTime _parkedTime;
        private double _cost;

        public string TicketNo
        {
            get { return _ticketNo; }
            set { _ticketNo = value; }
        }

        public DateTime ParkedTime
        {
            get { return _parkedTime; }
            set { _parkedTime = value; }
        }

        public double Cost
        {
            get { return _cost; }
            set { _cost = value; }
        }

        public Ticket()
        {
        }

        public Ticket(string ticketNo, DateTime parkedTime, double cost)
        {
            _ticketNo = ticketNo;
            _parkedTime = parkedTime;
            _cost = cost;
        }
        public override string ToString()
        {
            return $"TicketNo: {_ticketNo}\nParkedTime: {_parkedTime}\nCost: {_cost}";
        }

    }
}
