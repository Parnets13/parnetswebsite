const ProcessFlow = () => {

  return (
    <section className="py-8 lg:py-12 relative overflow-hidden" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-4 md:mb-5 lg:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span style={{ color: '#4e7de9' }}>Software</span>{' '}
            <span style={{ color: '#ff8c42' }}>Development</span>{' '}
            <span style={{ color: '#4e7de9' }}>Process</span>
          </h2>
        </div>

        {/* Process Flow Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl  rounded-lg" style={{ backgroundColor: '#f3f4f6d4' }}>
            <img 
              src="/process image.png" 
              alt="Development Process Flow" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
