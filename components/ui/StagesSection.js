/**
 * Sekcja etapów usuwania tatuażu z nagłówkiem i wrapperem
 * @param {Object} data - Dane stages z title, items i additional
 */
export default function StagesSection({ data }) {
  const { stages, additional } = data;

  return (
    <section id='etapy-usuwania' className='section-pad bg-surface'>
      <div className='section-wrap'>
        <h2 className='section-title-dark'>{stages.title}</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stages.items.map(stage => (
            <div key={stage.number} className='text-center'>
              <div className='bg-neon-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-normal mx-auto mb-4'>
                {stage.number}
              </div>
              <h3 className='font-normal text-text-dark mb-2'>{stage.title}</h3>
              <p className='text-secondary text-sm'>{stage.description}</p>
            </div>
          ))}
        </div>

        {/* DODATKOWE INFORMACJE */}
        <div className='mt-12 bg-surface-light rounded-lg p-6'>
          <h3 className='font-normal text-text-dark mb-4 text-center'>
            {additional.title}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {additional.items.map((item, index) => (
              <div key={index}>
                <h4 className='font-normal text-text-dark mb-2'>
                  {item.title}
                </h4>
                <p className='text-secondary text-sm'>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
