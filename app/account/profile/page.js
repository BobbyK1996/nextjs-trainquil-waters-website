import SelectCountry from '@/app/_components/SelectCountry';

function Page() {
  const countryFlag = 'pt.jpg';
  const nationality = 'Portugal';

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Update your guest profile
      </h2>
      <p className="mb-8 text-lg text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900">
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div>
          <label>Email address</label>
          <input disabled />
        </div>

        <div>
          <div>
            <label htmlFor="nationality">Where are you from?</label>
            <img src={countryFlag} alt="Country flag" />
          </div>

          <SelectCountry
            name="nationality"
            id="nationality"
            defaultCountry={nationality}
          />
        </div>

        <div>
          <label htmlFor="nationalID">National ID number</label>
          <input name="nationalID" />
        </div>

        <div>
          <button>Update profile</button>
        </div>
      </form>
    </div>
  );
}

export default Page;
