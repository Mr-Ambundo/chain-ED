
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Book, Award, User } from 'lucide-react';
import CourseGrid from '../components/CourseGrid';
import { useAuth} from '../hooks/useAuth'; 

const Landing: React.FC = () => {
  const navigate = useNavigate();
   const { login, logout, identity, isAuthenticated } = useAuth();


  return (
    <div className="flex flex-col max-h-screen">
      {/* Hero Section with Deep Purple Background */}
      <header style={{ background: 'radial-gradient(circle, #8C0CE8 0%, #140A9D 50%, #100764 100%)' }} className="text-white">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-sans tracking-tighter font-bold" style={{ 
              backgroundImage: 'linear-gradient(to right, #BEC3D8, #FFFFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              chain-ED
            </h1>
          </div>
          <div className='flex items-center gap-4'>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
              onClick={() => navigate('/')}
              style={{ color: '#FFFFFF' }}
            >
              My Courses
            </Button>
            <div className='w-3/4' onClick={login}><img src="/User.png" alt="User" /></div>  
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-24 text-center">
          <h1 className="text-5xl md:text-9xl font-heading font-black font-sans2 tracking-tighter leading-none mb-6 text-white">
            Bringing Education <br />
            <span className="italic text-5xl md:text-9xl font-medium"style={{ fontFamily: "'Playfair Display', serif", fontSize: "9.5rem" }}>Onchain</span>
          </h1>
          
          <p className="text-xl font-sans tracking-tighter mb-8 max-w-2xl mx-auto text-white">
            Learn blockchain technology and ICP development through our interactive platform
          </p>
          <div className="flex gap-4 justify-center ">
            <Button 
              style={{ backgroundColor: '#8D0DE8', color: '#FFFFFF' }}
              className=" font-sans tracking-tighter hover:bg-[#7905c9] px-8 py-2 text-lg "
              onClick={login}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Courses Preview Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8" style={{ color: '#333333' }}>Courses</h2>
          <CourseGrid filter="" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-4 font-sans tracking-tighter" style={{ backgroundColor: '#F5F5F7' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className='text-xl'>
              <h2 className="text-3xl font-heading font-bold mb-6" style={{ color: '#333333' }}>About Us</h2>
              <p style={{ color: '#555555' }} className="mb-4">
                We have a vision where Knowledge is democratized and available in decentralized form in a decentralized world.
              </p>
              <p style={{ color: '#555555' }} className="mb-4">
                We want to bring education on chain to incentivize learning, maximize learning for our learners and educate the masses on the potential of Blockchain technology.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/444a7a97-faea-4ca0-8f9f-3882bd1fe098.png" 
                alt="AI and Blockchain Education" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-white font-sans tracking-tighter ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center" style={{ color: '#333333' }}>Why Choose chain-ED</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div style={{ background: 'linear-gradient(to right, #BEC3D8, #A95FDE, #8D0DE8)' }} className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Book className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3" style={{ color: '#333333' }}>Cutting-Edge Curriculum</h3>
              <p className='text-xl' style={{ color: '#666666' }}>
                Learn from industry experts with constantly updated Educational content.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div style={{ background: 'linear-gradient(to right, #BEC3D8, #A95FDE, #8D0DE8)' }} className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3" style={{ color: '#333333' }}>Earn While You Learn</h3>
              <p className='text-xl' style={{ color: '#666666' }}>
                Complete courses and earn tokens through our blockchain-based achievement system.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div style={{ background: 'linear-gradient(to right, #BEC3D8, #A95FDE, #8D0DE8)' }} className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3" style={{ color: '#333333' }}>Community Focused</h3>
              <p className='text-xl' style={{ color: '#666666' }}>
                Join a thriving community of blockchain enthusiasts, students, and thought leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-white" style={{ background: 'linear-gradient(to bottom right,rgb(34, 12, 115), #4c1d95)' }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 font-sans tracking-tighter text-white">Ready to Start Your Blockchain-Powered Education Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white font-sans tracking-tighter">
            Join thousands of students already learning on our platform
          </p>
          <Button 
            style={{ backgroundColor: '#FFFFFF', color: '#8D0DE8' }}
            className="hover:bg-gray-100 px-8 py-6 text-lg font-sans tracking-tighter"
            onClick={() => navigate('/dashboard')}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#222222' }} className="text-white py-8 font-sans tracking-tighter">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">chain-ED</h2>
              <p style={{ color: '#BBBBBB' }} className="max-w-md font-sans text-xl tracking-tighter">
                Education reimagined for the decentralized future.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#DDDDDD' }}>PLATFORM</h3>
                <ul className="space-y-2 text-xl">
                  <li><a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">Courses</a></li>
                  <li><a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">Resources</a></li>
                  <li><a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">Community</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#DDDDDD' }}>COMPANY</h3>
                <ul className="space-y-2 text-xl">
                  <li><a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">About</a></li>
                  <li><a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">Careers</a></li>
                  <li><a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#DDDDDD' }}>LEGAL</h3>
                <ul className="space-y-2 text-xl">
                  <li><a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">Privacy</a></li>
                  <li><a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center" style={{ borderColor: '#444444' }}>
            <p style={{ color: '#BBBBBB' }} className="text-sm">© 2025 chain-ED. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0 text-xl">
              <a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">Twitter</a>
              <a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">LinkedIn</a>
              <a href="#" style={{ color: '#BBBBBB' }} className="hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;