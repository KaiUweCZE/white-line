interface PuppiesReviewProps {
  females: string[];
  males: string[];
}

const PuppiesReview = ({ females, males }: PuppiesReviewProps) => {
  return (
    <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
      <h3 className="text-xl font-medium mb-3">Přehled štěňat</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {females && females.length > 0 && (
          <div>
            <h4 className="text-lg font-medium mb-2 flex items-center">
              <span className="inline-block w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
              Fenky ({females.length})
            </h4>
            <ul className="text-gray-700 pl-5">
              {females.map((puppy) => (
                <li key={puppy}>{puppy}</li>
              ))}
            </ul>
          </div>
        )}

        {males && males.length > 0 && (
          <div>
            <h4 className="text-lg font-medium mb-2 flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Psi ({males.length})
            </h4>
            <ul className="text-gray-700 pl-5">
              {males.map((puppy) => (
                <li key={puppy}>{puppy}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PuppiesReview;
