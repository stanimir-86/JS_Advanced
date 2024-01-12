
function ticketSorter(tickets, sortings) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];
    tickets.forEach(element => {
        let [destination, price, status] = element.split("|");
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    });
    return result.sort((a, b) => {

        if (typeof a[sortings] === 'number') {
            return a[sortings] - b[sortings];
        } else {
            return a[sortings].localeCompare(b[sortings]);
        }
    });

}
ticketSorter(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')
