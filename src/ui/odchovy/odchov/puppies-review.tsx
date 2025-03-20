import LiDot from '@/ui/li-dot';

interface PuppiesReviewProps {
  females: string[];
  males: string[];
}

const PuppiesReview = ({ females = [], males = [] }: PuppiesReviewProps) => {
  // Defaultní hodnoty prázdných polí, abychom předešli chybám

  return (
    <section className="mb-4 bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-xl font-medium mb-4">Přehled štěňat</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {females.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-medium flex items-center">
              <LiDot />
              Fenky ({females.length})
            </h3>
            <ul className="text-gray-700 pl-5 ">
              {females.map((puppy) => (
                <li key={puppy}>{puppy}</li>
              ))}
            </ul>
          </div>
        )}

        {males.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-medium flex items-center">
              <LiDot />
              Psi ({males.length})
            </h3>
            <ul className="text-gray-700 pl-5 ">
              {males.map((puppy) => (
                <li key={puppy}>{puppy}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {females.length === 0 && males.length === 0 && (
        <p className="text-gray-500 italic">Žádná štěňata k zobrazení</p>
      )}
    </section>
  );
};

export default PuppiesReview;
