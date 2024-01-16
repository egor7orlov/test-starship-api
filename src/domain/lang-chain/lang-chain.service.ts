import { BadRequestException, Injectable } from '@nestjs/common';

export const keywordToAnswer: Record<string, string> = {
  launch:
    'Our next space launch is scheduled for [date]. You can watch the live stream on our website.',
  mars: 'We are planning a mission to Mars in [year]. This will be a major step in space exploration.',
  satellite:
    'We specialize in deploying satellites for various purposes, including communication and earth observation.',
  internship:
    'Our internship programs offer hands-on experience in space technology and mission planning. Check our careers page for more information.',
  tickets:
    'You can purchase tickets for our upcoming space tourism flights. Visit our space tourism section for details and pricing.',
  gravity:
    'Our spacecraft are equipped with state-of-the-art technology to manage the effects of microgravity on the human body.',
  safety:
    'Safety is our top priority. Our missions are planned with rigorous safety protocols and advanced engineering designs.',
  research:
    'We conduct extensive research in various fields of space science, including astrophysics, planetary science, and space biology.',
  partnership:
    'We collaborate with various organizations and governments for space exploration and technology development.',
  environment:
    'Sustainability is important to us. We strive to minimize the environmental impact of our launches and operations.',
};

@Injectable()
export class LangChainService {
  public processText({ text }: { text: string }): string {
    const words = text.toLowerCase().split(/\s+/);
    let compositeAnswer = '';

    for (const word of words) {
      const answer = keywordToAnswer[word];

      if (answer) {
        if (compositeAnswer) {
          compositeAnswer += '\n\n' + answer;
        } else {
          compositeAnswer += answer;
        }
      }
    }

    if (!compositeAnswer) {
      throw new BadRequestException("I'm not sure how to answer that.");
    }

    return compositeAnswer;
  }
}
