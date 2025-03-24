
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-cyber-dark/70" id="disclaimer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="p-3 rounded-full bg-cyber-purple/10 border border-cyber-purple/30">
              <AlertTriangle className="h-6 w-6 text-cyber-purple" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="cyber-gradient-text">Legal Disclaimer</span>
          </h2>
          
          <div className="cyber-card p-6 md:p-8 space-y-6">
            <p className="text-white/80 leading-relaxed">
              Sketch Artist GPT ("the Tool") is provided by AI Web Tools LLC ("we", "us", "our") on an "as is" and "as available" basis. While we strive to make the Tool useful and effective, we make no warranties, express or implied, regarding its functionality, accuracy, or reliability.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Usage Limitations</h3>
              <p className="text-white/80 leading-relaxed">
                The Tool is designed for sketch generation and image transformation. Users are responsible for ensuring that all content uploaded or described for sketch generation complies with applicable laws and OpenAI's content policies. We reserve the right to deny service for any content that violates these policies.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Intellectual Property</h3>
              <p className="text-white/80 leading-relaxed">
                The copyright and ownership of output images are subject to OpenAI's terms of service. Users are responsible for ensuring they have the right to use any uploaded images. The Tool's name, design, and interface are the property of AI Web Tools LLC and may not be used without permission.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Limitation of Liability</h3>
              <p className="text-white/80 leading-relaxed">
                To the maximum extent permitted by law, we disclaim all liability for any direct, indirect, incidental, special, consequential, or punitive damages arising from use of the Tool. We are not liable for any loss of profits, data, or goodwill resulting from your use of the Tool.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Third-Party Services</h3>
              <p className="text-white/80 leading-relaxed">
                The Tool integrates with OpenAI's GPT and DALLE services. We are not responsible for the availability, accuracy, or content of these third-party services. Users are subject to OpenAI's terms of service when using these integrated features.
              </p>
            </div>
            
            <p className="text-white/80 italic text-sm">
              By using Sketch Artist GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. This disclaimer may be updated from time to time without notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
