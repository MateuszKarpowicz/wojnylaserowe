/**
 * StageItem - Komponent pojedynczego etapu
 *
 * @param {Object} stage - Dane etapu z polami: number, title, description
 */
export default function StageItem({ stage }) {
  return (
    <div className='text-center'>
      <div className='bg-neon-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-normal mx-auto mb-4'>
        {stage.number}
      </div>
      <h3 className='font-normal text-text-dark mb-2'>{stage.title}</h3>
      <p className='text-secondary text-sm'>{stage.description}</p>
    </div>
  );
}
