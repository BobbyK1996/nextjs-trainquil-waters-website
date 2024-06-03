import Link from 'next/link';

export const metadata = {
  title: 'Reservations',
};

function Page() {
  const bookings = [];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{' '}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id}>Reservation Card Placeholder</div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
