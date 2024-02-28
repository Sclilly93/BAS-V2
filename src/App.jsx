import React from 'react';

const DeploymentOption = ({ image, alt, platform }) => (
  <div className="deployment-option">
    <img src={image} alt={alt} className="deployment-image" />
    <div className="deployment-title">Deploy to</div>
    <div className="deployment-platform">{platform}</div>
  </div>
);

const HostingProviderSection = () => {
  const deploymentOptions = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddb92129a2a872f7331120de75a9dfd109ba3d9c3526a29faf1526d0ba8262b7", alt: "AWS Logo", platform: "AWS" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6565a46911d01ca93323dcb5306a0f2ae0305c05d276c004895d49187914193", alt: "Firebase Logo", platform: "Firebase" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c76999e1cb6db6878ce1a241d741cd88b8aa8df7a31defb8cfe1c7c534142f9", alt: "OVH Logo", platform: "OVH" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/853de1c3a67d8dc434b0000032acf48401cd95143e39e7144b46af1cf71c50f8", alt: "GitHub Logo", platform: "GitHub" },
  ];

  return (
    <section className="deployment-options-section">
      {deploymentOptions.map((option, index) => (
        <DeploymentOption key={index} {...option} />
      ))}
    </section>
  );
};

function ServiceDeployment() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">Deploy to your networks that work for you</h1>
        <p className="header-description">We make it our priority to deploy your service to a hosting platform that works best for you.</p>
        <div className="action-buttons">
          <button className="action-button get-in-touch">Get in touch</button>
          <div className="learn-more">
            <button className="action-button">Learn More</button>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/62ed5c5698823218cebc35bb1830c1aa97aa27141281f0d0cbb4dfc3f714418c?apiKey=97398c734d724ad0b3d105b8c6ce69b2&" alt="" className="learn-more-icon" />
          </div>
        </div>
      </header>

      <main>
        <HostingProviderSection />
      </main>

      <style jsx>{`
        .header, .deployment-options-section {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 28px 60px;
          background-color: #0a0b0c;
        }

        .header-title {
          color: #fff;
          font-size: 24px;
          margin-bottom: 12px;
        }

        .header-description {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 24px;
        }

        .action-buttons {
          display: flex;
          gap: 16px;
        }

        .action-button {
          padding: 15px 25px;
          color: #fff;
          background-color: #111113;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 80px;
        }

        .learn-more {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .learn-more-icon {
          width: 14px;
          aspect-ratio: 0.7;
        }

        .deployment-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          margin: 10px;
        }

        .deployment-image {
          width: 80px;
          aspect-ratio: 1;
          margin-bottom: 20px;
        }

        .deployment-title, .deployment-platform {
          color: #8d8d96;
          margin-bottom: 5px;
        }

        .deployment-platform {
          color: #fff;
          font-size: 18px;
        }
      `}</style>
    </>
  );
}

export default ServiceDeployment;


