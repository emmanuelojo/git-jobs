import { Link } from "react-router-dom";

const JobDetails = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row justify-between gap-10">
      <div className="w-full md:w-1/3 flex flex-col gap-2">
        <Link to="/">
          <div className="flex items-center gap-2 text-n-light-blue">
            <span className="material-symbols-outlined ">west</span>
            <p>Back to search</p>
          </div>
        </Link>

        <p className="text-left text-sm font-bold uppercase text-n-dark-gray">
          how to apply
        </p>

        <p className="text-left text-sm text-n-blue font-medium ">
          Please email a copy of your resume and onlinne portfolio to{" "}
          <a href="mailto:wes@kasisto.com" className="text-n-light-blue">
            wes@kasisto.com
          </a>{" "}
          & CC{" "}
          <a href="mailto:eric@kasisto.com" className="text-n-light-blue">
            eric@kasisto.com
          </a>{" "}
        </p>
      </div>

      <div className="w-full md:w-2/3 grid gap-4">
        <div>
          <div className="flex flex-col sm:flex-row md:items-center gap-3">
            {" "}
            <h3 className="text-left text-xl text-n-blue font-bold">
              Frontend Software Engineer
            </h3>
            <p className="h-7 w-max px-2 text-left flex justify-center items-center text-xs text-n-blue border border-n-blue rounded">
              Full time
            </p>
          </div>

          <div className="mt-1 md:mt-0 flex items-center gap-2 text-xs text-n-gray">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <p className="">5 days ago</p>
          </div>
        </div>

        <div className="flex gap-3">
          <img
            src="src/assets/logo.png"
            alt="image"
            className="h-16 w-16  rounded"
          />
          <div className="flex flex-col">
            <p className="text-left text-n-blue font-bold">Kasisto</p>
            <div className="flex items-center gap-2 text-xs text-n-gray">
              <span className="material-symbols-outlined text-sm ">public</span>
              <p className="">New York</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 text-sm text-n-blue font-normal">
          <p className="text-left">Humanizing Digital Experiences®</p>
          <p className="text-left">
            Kasisto's Digital Experience Platform, KAI, is designed for
            financial institutions to deliver the industry's most amazing
            Conversational AI powered intelligent virtual assistants to their
            customers. KAI is open and extensible, and also fluent in the
            language of banking and finance. From simple retail transactions to
            the complex demands of corporate banks and wealth management,
            financial institutions can deliver meaningful digital interactions
            with KAI that help build their digital brand.
          </p>
          <p className="text-left">
            Financial institutions around the world use KAI, including DBS Bank,
            J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife
            Bank among others. They chose KAI for its proven track record to
            drive business results while improving customer experiences. The
            platform is used by millions of consumers around the world, all the
            time, across multiple channels, in different languages, and is
            optimized for performance, scalability, security, and compliance.
          </p>
          <p className="text-left">This position</p>
          <p className="text-left">
            We are looking for a Full-Stack, client side software engineer to
            help build and integrate responsive chat interfaces, analytics
            dashboards and reporting tools.
          </p>
          <p className="text-left">What you'll be doing</p>
          <p className="text-left">
            Working closely with clients and internal engineering, product and
            design teams to gather requirements Building and integrating
            front-end applications with CSS, HTML, Javascript, jQuery, Vue.js,
            Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java
            Working to improve user experience and functionality for tools
            Writing testable code utilizing common front-end unit and BDD
            testing frameworks What you need for this position
          </p>
          <p className="text-left">
            3+ years in client-side web development with CSS, HTML, Javascript
            and jQuery Proven, full-stack front-end experience using Python and
            Django Other Modern Web Framework(s) experience is a plus (React,
            Vue, Angular, Ember) Experience working collaboratively to build
            scalable, modular, production software in an Agile environment
            Experience using RESTful json services Node.js and API development
            familiarity is plus D3.js is a plus
          </p>
          <p className="text-left">What we offer:</p>
          <p className="text-left">
            Competitive compensation package Ground floor opportunity within
            rapidly growing tech startup Great collaborative team environment
            Full Benefits Fun perks
          </p>
          <p className="text-left">Location - NYC, Flatiron District</p>
          <p className="text-left">
            We welcome your cover letter with a description of your previous
            complete experience and your resume. Applicants must be authorized
            to work in the US as we are unable to sponsor. Kasisto is an equal
            opportunity employer.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
