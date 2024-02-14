import { useDispatch } from "react-redux";
import { updateTab } from "../store/curTabSlice";
import Intro from "./Intro";
import Subscribe from "./Subscribe";
import "./LastMin.css";
const title = { des: "Refundable" };
const reasons1 = [
  "Sudden Illness / Injury (including Covid-19)",
  "Pre-existing Medical Condition",
  "Complications During Pregnancy",
  "Unexpected Loss of a Family Member",
  "Public Transport Disruption",
  "Flight Cancellation",
  "Vehicle Breakdown",
  "Unforeseen Weather Conditions",
];

const nonAttendanceReasons = [
  "Actual or perceived: wildfires, volcano eruption, tsunami, earthquake; war, hostilities, civil commotion; imprisonment, repatriation, deportation; poisonous biological materials, radioactivity; Cyber Incident or Cyber Act; state property seizure.",
  "Failing to comply with any law.",
  "Any booking originating from Cuba, Iran, North Korea, Sudan, or Syria.",
  "Instances where exposed to any sanction, prohibition, or restriction under United Nations resolutions or the trade or economic sanctions, laws, or regulations of the European Union, United Kingdom, or United States of America.",
  "If it exceeds 18 months from the date originally booked to the conclusion of the transacted event.",
];

const reasons2 = [
  "Emergency at Home",
  "Document Theft",
  "Jury Duty",
  "Court Summons",
  "Urgent Military or Emergency Service Recall",
  "Work-Related Relocation",
  "Change in Exam Dates",
];

const refundPolicy = [
  "We do not offer refunds for reasons related to a Communicable Disease outbreak (including Covid-19) pandemic or epidemic, except for those outlined in the Covid-19 section below.",
  "Any refund request must not be based on circumstances that were known or foreseeable at the time of booking.",
  "Refunds are not granted if the booking is no longer desired or required.",
  "We are not responsible for refunds if the service provider cancels the booking or is obligated to issue a refund under different terms.",
  "You are responsible for ensuring timely arrival for your booking, including obtaining any necessary permits, travel documents, or visas.",
  "Reasonable precautions or alternative arrangements must be made to prevent or minimize refund requests.",
  "Upon request, you must provide appropriate supporting evidence at your expense, along with a copy of the booking confirmation; refunds will not be issued without sufficient evidence.",
  "Bank account details must be provided for direct refund payments.",
  "Refund amounts are capped at the total value of the booking or £10,000 GBP (or equivalent in other currencies) per person.",
];
const covid19RefundPolicy = [
  "If you or a member of your immediate household contracts Covid-19 within 7 days before the booking and requires isolation or shielding, supported by a positive PCR test result from an authorized laboratory with a verifiable QR or barcode.",
  "In case of Covid-19 infection of a family member requiring hospitalization or resulting in death within 14 days before the booking, supported by medical or death certificates.",
  "If a significant deterioration in your pre-existing medical condition occurs within 7 days before the booking, resulting in a doctor advising against attending due to Covid-19 exposure risk.",
];

const LastMinuteFlights = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Last Minute Flights"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <Intro des={title.des} />
      <div className="flex flex-col justify-start h-auto bg-white gap-2 gap-y-6 px-[1.5rem] md:px-[10rem] py-[3rem]">
        <div className="h-[15rem] md:h-[30rem] rounded-3xl bg-no-repeat bg-cover bg-center flex flex-col p-[3rem] justify-between lastMin"></div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Get Last-Minute Flight Deals with Ease</h1>
          <p>
            Planning a spontaneous trip? Tripcanny is here to make it hassle-free with our exclusive last-minute flight
            deals. Whether it's a sudden getaway or an impromptu international adventure, we've got you covered.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Finding Affordable Last-Minute Flights Made Simple</h1>
          <p>Follow these steps to grab great deals on last-minute flights:</p>
          <p>Step 1: Stay Flexible: Be open to late-night or red-eye flights for better prices.</p>
          <p>Step 2: Use Your Airline Miles: Utilize accumulated miles for instant savings.</p>
          <p>Step 3: Explore Multiple Destinations: Keep your options open for exciting deals.</p>
          <p>Step 4: Choose Budget-Friendly Airlines: Opt for low-cost carriers to save more.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Booking Flights at the Last Minute</h1>
          <p>
            While policies vary, you can generally book up to two hours before departure. Act fast to secure your
            spontaneous adventure!
          </p>
          <p>
            Ready for your next spontaneous trip? Check out our last-minute flight deals and make your dream trip a
            reality without breaking the bank.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-bold">Eligibility for Refunds</h1>
          <p>We offer refunds under the following circumstances:</p>
          <p className="mt-5">
            If you're unable to attend your booking due to any of the listed reasons and provide the necessary evidence
            as detailed in the respective sections below, subject to our General Refund Conditions.
          </p>
          <ul className="gridb grid-cols-1 md:grid-cols-2 mt-3 list-disc px-[1rem] py-[1rem] md:px-[4rem] md:py-[2rem] ">
            <div>
              {reasons1.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </div>
            <div>
              {reasons2.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </div>
          </ul>
          <p>Refunds are not available for travel restrictions related to Covid-19 or due to travel apprehensions.</p>
          <p>We may consider other emergency situations at our discretion, provided you provide evidence.</p>
          <p>
            Refer to the General Refund Conditions and the respective sections below for detailed information on refund
            eligibility.
          </p>
          <h1 className="text-xl font-bold">General Refund Conditions</h1>
          <ul className="mt-3 list-disc px-[2rem]">
            {refundPolicy.map((policy, index) => (
              <li key={index}>{policy}</li>
            ))}
          </ul>
          <h1 className="text-xl font-bold">Covid-19 Refund Policy</h1>
          <p>Refunds may be granted if you're unable to attend your booking due to Covid-19 in the following cases:</p>
          <ul className="mt-3">
            {covid19RefundPolicy.map((policy, index) => (
              <li key={index}>{policy}</li>
            ))}
          </ul>
          <p>
            Refunds will not be issued if you're concerned about contracting Covid-19, isolating without a positive test
            result in your household, or if your travel plans are affected by Covid-19 restrictions.
          </p>
          <p>These refund criteria are discretionary and do not guarantee refunds.</p>
          <p>
            **Refer to the full terms and conditions below for the refund policy and excluded reasons for Covid-19
            refund requests.
          </p>
          <h1 className="text-xl font-bold">How to Request a Refund</h1>
          <p>
            Refund applications and payments are handled by our Customer Experience Team, acting as administrators of
            our refundable terms.
          </p>
          <p>
            To apply for a refund, complete the Refund Application Form here within 60 days of booking if you're unable
            to attend.
          </p>
          <p>
            If your booking is canceled or postponed by the organizer, contact our customer service team directly using
            the contact details provided in your booking confirmation.
          </p>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Illness / Injury{" "}
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  means an Illness or accidental Injury to You. We will also refund the cost of the Doctor’s note on
                  valid Refund Application.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">What we do not refund </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>
                    Where you cannot provide evidence that the person affected is within the Group due to Attend the
                    Booking.
                  </p>
                  <p>Where You have not been physically examined by a Doctor prior to the date of the Booking.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Evidence required </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">Doctor’s note or Medical Certificate confirming:</p>
                  <ul className="list-disc px-[3rem]">
                    <li>the details of the illness or injury,</li>
                    <li>the date it first occurred,</li>
                    <li>that it prevents You from Attending the Booking.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Pre-existing Medical Condition
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to a physical or mental health condition known to you at the time of booking that wouldn't
                  typically prevent you from attending the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>
                    Where the guidelines for your pre-existing medical condition would usually prevent you from
                    attending the booking.
                  </p>
                  <p>Where you haven't undergone a physical examination by a Doctor before the booking date.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">A Doctor’s note or Medical Certificate confirming:</p>
                  <ul className="list-disc px-[3rem]">
                    <li>details of the illness,</li>
                    <li>the date it occurred,</li>
                    <li>how it prevented you from attending the booking.</li>
                  </ul>
                  <p>(Receipt required for Doctor’s note refund up to £50 or equivalent)</p>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Pregnancy Complication
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to a complication of pregnancy that you were unaware of at the time of booking and which
                  prevents you from attending the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>Normal Pregnancy.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">A Doctor’s note or Medical Certificate confirming:</p>
                  <ul className="list-disc px-[3rem]">
                    <li>details of the complication,</li>
                    <li>the date it occurred,</li>
                    <li>how it prevented you from attending the booking.</li>
                  </ul>
                  <p>(Receipt required for Doctor’s note refund up to £50 or equivalent)</p>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">Death</td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to your death at any time prior to the booking or the death of an Immediate Family member or
                  any person(s) in the Group due to attend the event with you, up to 35 days prior to the date of the
                  booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>
                    The death of a person not within your Immediate Family or in the Group due to attend the booking.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">A death certificate.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Public Transport Failure
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to unexpected disruption or failure of the public transport network which you could not have
                  reasonably been aware of on or before the date of the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>If there is a financial failure of any transport provider.</p>
                  <p>Heavy traffic or road closures.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">
                    A copy of the notice of failure or disruption of the public transport. (This can normally be
                    obtained from the transport company’s website).
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Flight Disruption
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to the cancellation or significant delay of flight(s) of which you were unaware before the date
                  of the booking, preventing you from attending your booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>
                    If your flight is your booking and it is cancelled or postponed, and you have a right of
                    compensation from the airline or another paying party.
                  </p>
                  <p>
                    If you were aware of the disruption prior to the date of the booking and did not make reasonable
                    suitable alternative travel arrangements.
                  </p>
                  <p>If there is a financial failure of any transport provider.</p>
                  <p>
                    If the purpose or reason for which you booked your flight in order to attend has altered or been
                    cancelled.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">
                    A copy of your airline ticket and notice of cancellation from the airline.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Mechanical Breakdown
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to the mechanical breakdown, accident, fire, or theft of a vehicle taking you to the booking
                  within the 24 hours prior to the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>If you did not leave sufficient time to travel to the booking.</p>
                  <p>If you did not make reasonable alternative arrangements to attend the booking.</p>
                  <p>Any vehicle you plan to use during the booking.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">
                    Breakdown – A copy of the call out note from your breakdown recovery service.
                  </p>
                  <p>An incident number or report from the police or relevant traffic authority.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Adverse Weather
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to weather conditions where a Government Agency has issued warnings not to travel, which
                  entirely prevents you from attending the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>Adverse weather with no Government Agency warnings not to travel.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">A copy of the travel warning from the Government Agency.</p>
                  <p>Confirmation of relevant route closures.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Home Emergency
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to a burglary, fire, malicious damage, or flood at your private residence up to 48 hours
                  immediately before the booking, of which you were unaware at the time of making the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>Any home emergency for which you cannot provide evidence as below.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">
                    Burglary, Flood, Malicious Damage: A police reference number or evidence from the submission of a
                    claim to your home insurance company.
                  </p>
                  <p>Fire: A report from the fire service and/or police.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Theft of Document(s)
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to the theft of a document necessary for the booking, which cannot be replaced in time for the
                  booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>Where documents can be replaced in advance of the booking or on the day.</p>
                  <p>Where documents have been lost.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">
                    A police report or crime number to confirm the theft (Self-declaration not accepted).
                  </p>
                  <p>An email from the booking agent confirming they are unable to replace/re-issue the tickets.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Relocated for Work
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  refers to a requirement to move address imposed on you by your current employer, unknown to you at the
                  date of booking. The move may be temporary or permanent and must be to a location that makes the
                  travel requirement to your booking unreasonable.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>Attendance at business meetings and business travel.</p>
                  <p>Any temporary relocation for work must be for a period of at least 3 months.</p>
                  <p>Voluntary relocation or where you are changing employer for a new role.</p>
                  <p>Where you are the business owner or registered director, or a member of your family is.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">A letter from your current employer confirming the relocation details.</p>
                  <p>Evidence of living at the new address.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Armed Forces & Emergency Services Recall
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  means you as a member of the Armed Forces, Reserve Armed Forces, or Emergency Services are recalled to
                  work on the date of the booking or are posted overseas and cannot attend the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>
                    You were aware of or had scheduled work on the date of the booking, prior to making the booking.
                  </p>
                  <p>You made an unsuccessful request for annual leave for the date of the booking.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">
                    A note from your Commanding Officer or Line Manager to confirm being called into work or duty and
                    that this was not your original schedule.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Jury Service
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  means a summons for you to attend Jury Service over the date of the booking of which you were unaware
                  at the time of making the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>Any Jury Service for which you cannot provide evidence as below.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">A copy of the letter requiring Jury Service.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Court Summons
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  means you are summoned to appear as a witness in court proceedings on the day of the booking of which
                  you were unaware at the time of making the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>
                    Any Court Summons in which you are a named Defendant in Criminal Proceedings or where you are the
                    subject of Criminal Proceedings.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">A copy of the Court Summons.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Changes to Examination Dates
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  means the unforeseen change of the date of an examination that you are already registered to on the
                  day(s) of the booking.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>Where you failed the examination previously and had to re-sit.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">
                    A copy of a notice from the examination body, school, college, university confirming the change of
                    date.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="border-separate border-spacing-1 border border-slate-600 text-start mt-[2rem] w-auto">
            <tbody>
              <tr>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem] ">
                  Emergency Circumstances
                </td>
                <td className="border border-slate-300 px-[0.5rem] py-[0.8rem] md:px-[1.5rem] md:py-[1rem]">
                  means an unforeseen circumstance completely outside your control and of no fault of yours. The
                  decision to refund is entirely at the discretion of our Customer Experience Team. We will consider
                  these circumstances and have no obligation whatsoever to provide a refund.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Non-refundable circumstances </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p>
                    Anything which our Customer Experience Team considers is not intended to be included in this list of
                    valid reasons for refund.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">Required evidence </td>
                <td className="border border-slate-300 px-[1.5rem] py-[1rem]">
                  <p className="px-[1.5rem]">
                    Any evidence requested by our Customer Experience Team to verify the emergency circumstances.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="text-xl font-bold mt-2">Specific reasons where refunds will not be provided:</h1>
        <ul className="list-disc px-[2rem]">
          {nonAttendanceReasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
        <ul>
          <li>
            <strong>We/Us/Our</strong> – Refers to the Booking agent with whom You made the Booking.
          </li>
          <li>
            <strong>You/Your/Yourself</strong> – Refers to a person who has made a Booking alone or as part of a group
            with Us.
          </li>
          <li>
            <strong>Armed Forces</strong> – Refers to the Naval Service, Marines, Army, or Air Force.
          </li>
          <li>
            <strong>Attend</strong> – Means to participate in, take part in, use, or be present at.
          </li>
          <li>
            <strong>Booking</strong> – Refers to the pre-planned and pre-booked service(s)/event(s)/flight(s)/ticket(s)
            transacted with Us by You.
          </li>
          <li>
            <strong>Communicable Disease</strong> – Refers to any disease capable of being transmitted from an infected
            person or species to a susceptible host, either directly or indirectly, that has caused quarantines or
            restriction of movement of people.
          </li>
          <li>
            <strong>Doctor</strong> – Refers to a qualified medical practitioner registered and licensed with a
            recognized professional body. A doctor cannot be You or a member of Your family.
          </li>
          <li>
            <strong>Emergency Services</strong> – Refers to Police, Fire and Rescue Service, or other Emergency
            Services.
          </li>
          <li>
            <strong>Immediate family</strong> – Refers to Your husband, wife, partner, civil partner, parent, child,
            brother, sister, grandmother, or grandfather, or stepfamily.
          </li>
          <li>
            <strong>Immediate household</strong> – Refers to persons living together at the same permanent address.
          </li>
          <li>
            <strong>Paying Party</strong> – Refers to any organization or body who has a legal liability to pay
            compensation for the failure of the service, against whom You have a right of refund.
          </li>
        </ul>

        <p>
          <strong>IMPORTANT:</strong> Any translation of this document from English is for assistance and information
          only. In the event of a Refund Application, the English language version shall be the basis of settlement.
        </p>

        <p>All aspects of this document are subject to English law and the jurisdiction of the English courts.</p>

        <p>
          This is not an insurance policy. A Refundable Booking is an optional extension to Our standard Terms &
          Conditions of sale and trade, and it provides a refund for certain defined circumstances outlined in this
          document.
        </p>
      </div>
      <Subscribe />
    </>
  );
};

export default LastMinuteFlights;
