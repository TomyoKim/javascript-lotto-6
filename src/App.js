import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const SUM_OF_PURCHASE = await this.inputAmount();

    if (SUM_OF_PURCHASE % 1000 !== 0) {
      Console.print("[ERROR] 1,000원 단위로 입력하세요.");
      return;
    }

    const TICKET_COUNT = SUM_OF_PURCHASE / 1000;
    Console.print(`\n${TICKET_COUNT}개를 구매했습니다.`);

    const LOTTO_TICKETS = this.generateLotto(TICKET_COUNT);
    const { WINNING_NUMBERS, BONUS_NUMBER } =
      await this.INPUT_WINNING_NUMBERS();

    const WINNING = this.CHECK_LOTTO_TICKETS(
      LOTTO_TICKETS,
      WINNING_NUMBERS,
      BONUS_NUMBER
    );

    this.SHOW_WINNING(WINNING, TICKET_COUNT);
  }

  async inputAmount() {
    while (true) {
      const SUM_OF_PURCHASE = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      if (SUM_OF_PURCHASE % 1000 === 0) {
        return parseInt(SUM_OF_PURCHASE, 10);
      } else {
        Console.print("[ERROR] 1,000원 단위로 입력하세요.");
      }
    }
  }
}

export default App;
