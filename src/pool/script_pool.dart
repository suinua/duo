import '../model/phrase.dart';
import '../model/section.dart';

class ScriptPool {
  static ScriptPool? _instance;

  ScriptPool._internal() {
    _fetchData();
  }

  factory ScriptPool() {
    _instance ??= ScriptPool._internal();
    return _instance!;
  }

  final List<Section> _sectionList = [];
  List<Section> get sectionList => _sectionList;

  void _fetchData() {
    _scriptRawData.forEach((String sectionNumberAsStr, sections) {
      var sectionNumber = int.parse(sectionNumberAsStr);
      var section = Section(sectionNumber);
      _sectionList.add(section);

      sections.forEach((phraseNumberAsStr, phrase) {
        var phraseNumber = int.parse(phraseNumberAsStr);

        var jp = phrase['jp']!.replaceFirst(RegExp('^[0-9]* *'), '');
        var en = phrase['en']!.replaceFirst(RegExp('^[0-9]* *'), '');
        section.addPhrase(Phrase(sectionNumber, phraseNumber, jp, en));
      });
    });

    _sectionList.sort((a,b) => a.sectionNumber.compareTo(b.sectionNumber));
  }

  Section getSection(int sectionNumber) {
    assert(0 <= sectionNumber && sectionNumber <= 45);
    return _sectionList.firstWhere((section) =>
    section.sectionNumber == sectionNumber);
  }

  Phrase getPhrase(int phraseNumber) {
    Phrase? result;
    _sectionList.forEach((section) {
      section.phraseList.forEach((phrase) {
        if (phrase.phraseNumber == phraseNumber) result = phrase;
      });
    });

    return result!;
  }
}

const _scriptRawData = <String, Map<String, Map<String, String>>>{
  '1': {
    '1': {
      'jp': '1 個人の意志は尊重しなければいけない。',
      'en': '1 We must respect the will of the individual.'
    },
    '2': {
      'jp': '2 気楽にいけよ。大丈夫、すべてうまくいくさ。',
      'en': '2 Take it easy. I can assure you that everything will turn out fine.'
    },
    '3': {
      'jp': '3 悲観的な人生観を捨てて、前向きな態度を常に持ち続けよう。',
      'en': '3 Let go of your negative outlook on life. Always maintain a positive attitude.'
    },
    '4': {
      'jp': '4 生まれた国、性別、信条に関係なく、誰に対しても公平でなくてはならない',
      'en': '4 You should be fair to everyone regardless of national origin, gender, or creed.'
    },
    '5': {
      'jp': '5 平等は憲法で守られている。',
      'en': '5 Equality is guaranteed by the Constitution.'
    },
    '6': {
      'jp': '6 彼は柱に寄りかかって、自由の女神像をじっとみつめた',
      'en': '6 He leaned against the pillar and gazed at the Statue of Liberty.'
    },
    '7': {
      'jp': '7 香水のほのかな香りを漂わせながら、一人の女性が僕の前を通り過ぎた。前の彼女のことを思い出してしまった。',
      'en': '7 A woman passed by me giving off a subtle scent of perfume. It reminded me of my ex-girlfriend.'
    },
    '8': {
      'jp': '8 納豆は臭いはひどいけれど味は最高。',
      'en': '8 Natto smells awful but tastes terrific.'
    },
    '9': {
      'jp': '9 「汗でびしょぬれだよ。」「来ないで！臭いわ。シャワーを浴びて。」',
      'en': "9 \"I'm soaked with sweat.\" \"Stand back! You stink. Take a shower.\""
    }
  },
  '10': {
    '114': {
      'jp': '114 ここにある物を片付けなさい。邪魔よ。',
      'en': "114 Put this stuff away! It's in the way."
    },
    '115': {
      'jp': '115 子供たちが恐竜ごっこをしていたら、お母さんに叱られた。',
      'en': '115 When the kids made believe they were dinosaurs, they were scolded by their mother.'
    },
    '116': {
      'jp': '116 彼が棚にぶつかり、とても高価な陶磁器が落ちて粉々に割れてしまった。',
      'en': '116 After he bumped into the shelf, the priceless china fell and shattered into fragments.'
    },
    '117': {
      'jp': '117 「うちの子たちをちょっと見ててもらえる？ケンを迎えに行かないといけないの｡」「いいよ｡」',
      'en': '117 \"Can you keep an eye on my kids for a while? I need to pick up Ken. No problem.\"'
    },
    '118': {
      'jp': '118 隣の家の人が庭をめちゃくちゃにされたと、私たちにがみがみ説教した。',
      'en': '118 Our neighbor told us off for making a mess in his yard.'
    },
    '119': {
      'jp': '119 ドリーはあらゆる面でお姉さんにそっくりだ。二人を見分けることはできないよ。',
      'en': "119 Dolly resembles her big sister in every way. You can't tell them apart."
    },
    '120': {
      'jp': '120 慨して、双子には似たところが多い。',
      'en': '120 As a rule, twins have a lot in common.'
    },
    '121': {
      'jp': '121 皿洗いとか洗濯とか、そういうことにはもううんざり！',
      'en': "121 I'm tired of doing the dishes, doing the laundry, and so on!"
    },
    '122': {
      'jp': '122 時間があいたときの一番の楽しみは浜辺の散歩です。気持ちいいですよ。',
      'en': "122 My favorite pastime is strolling along the shore. It's pleasant."
    },
    '123': {
      'jp': '123 「私、もうくたくた。日陰で休憩しましょう｡」「そうだね｡」',
      'en': "123 \"I'm exhausted! Let's take a break in the shade.\" \"Why not?\""
    },
    '124': {
      'jp': '124 「ボブ、この自動販売機、故障してるわ｡」「何だって！喉が乾いて死にそうだよ！」',
      'en': "124 \"Bob, this vending machine is out of order.\" \"Oh no! I'm dying of thirst!\""
    },
    '125': {
      'jp': '125 彼は空腹と疲労で気を失ったが、しばらくして意識を取り戻した。',
      'en': '125 He fainted with hunger and fatigue, but came to after a while.'
    }
  },
  '5': {
    '46': {
      'jp': '46 彼らには、けがに対する補償を受ける権利がある。',
      'en': '46 They are entitled to be compensated for their injuries.'
    },
    '47': {
      'jp': '47 インフルエンザの流行で、現在までに200人もの人が亡くなっている。',
      'en': '47 So far, no less than 200 people have died of the flu epidemic.'
    },
    '48': {
      'jp': '48 それらの錠剤の効果は強烈だが持続性はない。',
      'en': '48 The effect of those pills is intense but brief.'
    },
    '49': {
      'jp': '49 彼は爪を噛む癖がある。あれには本当にぞっとするよ。',
      'en': "49 He has a habit of biting his nails. It's absolutely disgusting."
    },
    '50': {
      'jp': '50 うちの息子を抱こうとしてかがんだときに、おばあちゃんは腰を痛めた。',
      'en': '50 My grandma strained her back when she bent down to hug my son.'
    },
    '51': {
      'jp': '51 肩が凝るなら、薬草治療を試してごらんよ。',
      'en': '51 If you have a stiff neck, try an herbal remedy.'
    },
    '52': {
      'jp': '52 医学の飛躍的発展は人類全体に多大な恩恵をもたらしてきた。',
      'en': '52 Medical breakthroughs have brought about great benefits for humanity as a whole.'
    },
    '53': {
      'jp': '53 クローン技術は人間にはもちろん､牛にも応用してはいけない。 絶対にしてはならないことだ。',
      'en': "53 We can't apply cloning techniques to cattle, let alone human beings. It's forbidden."
    },
    '54': {
      'jp': '54 鯨は哺乳動物に分類される。',
      'en': '54 Whales are classified as mammals.'
    },
    '55': {
      'jp': '55 進化論は私の想像力の範囲を超えている。',
      'en': '55 The theory of evolution is beyond the reach of my imagination.'
    },
    '56': {
      'jp': '56 その生物学者は自分の歴史的発見に誇りをもっており、そのことを臆することなく口に出す。',
      'en': "56 The biologist is proud of his historic discovery and doesn't mind boasting about it."
    },
    '57': {
      'jp': '57 倫理的な理由から、彼らはいわゆる遺伝子治療に反対している。',
      'en': '57 On ethical grounds, they are opposed to so-called gene therapy.'
    },
    '58': {
      'jp': '58 その病気の初期症状は高熱と喉の痛みです。',
      'en': '58 The initial symptoms of the disease are fever and a sore throat.'
    },
    '59': {
      'jp': '59 脳の構造は複雑だ。',
      'en': '59 The structure of the brain is complex.'
    },
    '60': {
      'jp': '60 病気のために年次会議を欠席した代表者もいた。',
      'en': '60 Owing to illness, some representatives were absent from the annual conference.'
    },
    '61': {
      'jp': '61 私の娘婿は徐々に胃癌を克服しつつあり、今は明るく元気だ。',
      'en': '61 Little by little, my son-in-law is recovering from stomach cancer, and now he is in good spirits.'
    },
    '62': {
      'jp': '62 「これって偽物だろう？」 「何言ってるの。本物の骨蓮品よ。」 「まさか！」',
      'en': "62 \"This is fake, isn't it?\" \"Hey, it's a genuine antique.\" \"No way!\""
    }
  },
  '2': {
    '10': {
      'jp': '10 ボブはひどく取り乱していて、現実と虚構の区別がほとんどできなかった。',
      'en': '10 Bob was so beside himself that he could scarcely tell fact from fiction.'
    },
    '11': {
      'jp': '11 まもなく出版になる彼の小説は、散文に彼の詩の才能を融合させたものだ。',
      'en': '11 His new novel, which combines prose with his gift for poetry, is going to be published.'
    },
    '12': {
      'jp': '12 来月、その百科事典の最新版が出る。',
      'en': '12 An up-to-date edition of the encyclopedia will come out next month.'
    },
    '13': {
      'jp': '13 山田さんがその心ひかれるおとぎ話をやさしい日本語に翻訳 した。',
      'en': '13 Ms. Yamada translated the fascinating fairy tale into plain Japanese.'
    },
    '14': {
      'jp': '14 以下の一説は有名な寓話からの引用です。',
      'en': '14 The following passage is quoted from a well-known fable.'
    },
    '15': {
      'jp': '15 「現代文学に詳しいですが？」 「ほとんど知りません。」',
      'en': '15 \"Are you familiar with contemporary literature?\" \"I know next to nothing about it.\"'
    },
    '16': {
      'jp': '16 時々、\"curve\"と\"carve\"を混同してしまう',
      'en': '16 At times I confuse \"curve\" with \"carve.\"'
    },
    '17': {
      'jp': '17 恥ずかしがらないで。あなたの発音はだいたい合っています。',
      'en': "17 Don't be shy. Your pronunciation is more or less correct."
    },
    '18': {
      'jp': '18 この記事には語彙を本気で増やしたいと思う人々に役立つ情報が含まれています。',
      'en': '18 This article contains tips for those who are eager to increase their vocabulary.'
    },
    '19': {
      'jp': '19 彼の最新の作品が市庁舎で展示されているの｡言葉にできないほど素敵よ。',
      'en': '19 His latest works are on display at the city hall. They are fabulous beyond description.'
    },
    '20': {
      'jp': '20 「少し詰めていただけませんか？」「あ、ごめんなさい。こんなに 場所を取っていたなんて気付きませんでした｡」',
      'en': "20 \"Could you move over a little?\" \"Oh, sorry. I didn't realize I was taking up so much space.\""
    },
    '21': {
      'jp': '21 「この不格好な物体は何？」 「これは抽象芸術の作品だよ！」',
      'en': "21 \"What's this ugly object?\" \"This is a piece of abstract art!\""
    }
  },
  '3': {
    '22': {
      'jp': '22 100ドル貸してくれとリッチーに頼んだら、彼は「俺もお金がないんだよ！」と言って首を横に振った。',
      'en': "22 I begged Richie to lend me a hundred bucks, but he shook his head, saying, \"I'm broke, too.\""
    },
    '23': {
      'jp': '23 「安売りをしているといつも衝動買いしてしまうたちです。」 「私も。」',
      'en': "23 \"I'm apt to buy things on impulse whenever something is on sale.\" \"So am I.\""
    },
    '24': {
      'jp': '24 実際のところ、普通の人々にはそんな贅沢品を購入する余裕はない。',
      'en': '24 As it is, ordinary people cannot afford to purchase such luxuries.'
    },
    '25': {
      'jp': '25 予期していたとおり、失業率は3四半期連続で上昇した。',
      'en': '25 As we anticipated, the unemployment rate has risen three quarters in a row.'
    },
    '26': {
      'jp': '26 出費を切り詰めないと。だから、これからは使ったお金は一日単位で記録していくつもりだ。',
      'en': "26 I have to cut down on my expenses, so from now on, I'm going to keep track of them on a daily basis."
    },
    '27': {
      'jp': '27 いずれにせよ、組合側はある程度妥協しなければならない',
      'en': '27 In any case, the union has to compromise to a certain extent.'
    },
    '28': {
      'jp': '28 有能な整備士は引っ張りだこだから、なかなかの賃金を稼げる。',
      'en': '28 Competent mechanics are in great demand, so they earn decent wages.'
    },
    '29': {
      'jp': '29 大統領は福祉改革を実行するための具体的な計画を発表した。',
      'en': '29 The president announced a concrete plan to carry out welfare reform.'
    },
    '30': {
      'jp': '30 彼の政策はきっと暗い結果を招くだろう。徹底的な見直しが必要だ。',
      'en': '30 His policy will no doubt lead to dismal consequences. It needs a thorough review.'
    },
    '31': {
      'jp': '31 社会の高齢化が避けられないことは言うまでもない。',
      'en': '31 It goes without saying that the aging of society is inevitable.'
    },
    '32': {
      'jp': '32 この表をご覧になってください。少年非行が深刻な割合で増加していることを示しています。',
      'en': '32 Please take a look at this chart. It indicates that juvenile delinquency is on the increase at an alarming rate.'
    },
    '33': {
      'jp': '33 多くの商業地区では、数年間売りに出されている空き地がたくさんある。',
      'en': '33 In many business districts, there are a lot of vacant lots which have been for sale for years.'
    },
    '34': {
      'jp': '34 大都市の人口密度が徐々に低下している。',
      'en': '34 The population density in the metropolis is gradually decreasing.'
    },
    '35': {
      'jp': '35 ほぼ間違いなくこの先数年、出生率は減少の一途をたどるだろう。',
      'en': '35 In all likelihood, the birthrate will continue to decline steadily for years to come.'
    }
  },
  '9': {
    '101': {
      'jp': '101 うちの光熱費がそんな額になっているのを知ってびっくりした。',
      'en': '101 I was amazed to see that our utility bills came to so much'
    },
    '102': {
      'jp': '102 ｢水道の栓を閉めなさい！｣とお母さんがかんかんになって叫んだ。',
      'en': '102 \"Turn the faucet off!\" mom yelled in a rage.'
    },
    '103': {
      'jp': '103 食べ物が腐らない様にふたをしっかり閉めなさい。',
      'en': "103 Tighten the lid so the food doesn't go bad."
    },
    '104': {
      'jp': '104 ｢ハサミを貸してもらえる？」「もちろん。はいどうぞ｡」',
      'en': '104 \"Can I borrow your scissors?\" \"Sure, here you are.\"'
    },
    '105': {
      'jp': '105 針と糸の代わりに透明な接着剤を使っても結構です｡',
      'en': '105 You can substitute some transparent glue for a needle and thread.'
    },
    '106': {
      'jp': '106 この織物を染めたら縮んでしまった。',
      'en': '106 I dyed this fabric and it shrank'
    },
    '107': {
      'jp': '107 この革のジャケットは処分するよ。両肘の部分がすり減って穴があいているから。',
      'en': "107 I'm getting rid of this leather jacket because it's worn out at the elbows."
    },
    '108': {
      'jp': '108 その混ぜ合わせたものに小麦粉を加えて、とろみがつくまでかき混ぜましょう。',
      'en': '108 Add some flour to the mixture and stir it until it becomes thick.'
    },
    '109': {
      'jp': '109 「残り物をどうしよう？」 「とりあえず冷蔵庫に入れておいて。 後で電子レンジで温め直すよ。」',
      'en': "109 \"What should we do with the leftovers?\" \"Keep them in the fridge for now. I'll heat them in the microwave later.\""
    },
    '110': {
      'jp': '110 新しいパソコンに全額つぎ込むこともできたが、考え直して、まさかの時のために多少は残しておくことにした。',
      'en': '110 I could have laid out all that money on a new PC, but on second thought I decided to put some aside for a rainy day.'
    },
    '111': {
      'jp': '111 携帯電話はちょっとした必需品になったことだし、それなしではやっていけない。',
      'en': "111 A cell phone has become something of a necessity, and I can't do without one."
    },
    '112': {
      'jp': '112 イスにゆったり座ってくつろいだ途端、妻に雑用を頼まれた。',
      'en': '112 No sooner had I sat back and relaxed than my wife asked me to do the chores.'
    },
    '113': {
      'jp': '113 彼女は赤ちゃんを寝かせて自分も隣に横になった。',
      'en': '113 She laid the baby down and lay down beside him.'
    }
  },
  '7': {
    '76': {
      'jp': '76 議長は私の話を遮って、「話し合いはここまでにして決を採りましょう。」と言った。',
      'en': "76 The chairman cut me off, saying, \"Time to wind things up. Let's take a vote.\""
    },
    '77': {
      'jp': '77 我々は会議で率直な意見を交わしたが、この件に関してはまだ全体の意見がまとまらない。',
      'en': '77 We exchanged frank opinions in the meeting, but consensus is yet to be reached regarding this matter.'
    },
    '78': {
      'jp': '78 「あなたは彼と同じ意見？ それとも違うの？」「彼のほうを支持するよ。」',
      'en': "78 \"Do you agree or disagree with him?\" \"I'm on his side.\""
    },
    '79': {
      'jp': '79 厳密に言えば、彼の見解は私のものとはいくらか異なる。',
      'en': '79 Strictly speaking, his view differs somewhat from mine.'
    },
    '80': {
      'jp': '80 もう一度詳しく説明していただけませんか？ お話の意図がわかりませんでした。',
      'en': "80 Could you go over it again? I couldn't make out what you were getting at."
    },
    '81': {
      'jp': '81 僕の案を支持してくれる人は最初は誰もいなかったけれど、最後にはみんなを説得して賛同してもらうことができた。',
      'en': '81 No one backed me up at first, but eventually I talked everyone into going along with my plan.'
    },
    '82': {
      'jp': '82 君の不屈の努力、勇気、そして知恵には感心するよ。」「お世辞でもうれしいわ！」',
      'en': '82 \"I admire your perseverance, courage and wisdom.\" \"You flatter me!\"'
    },
    '83': {
      'jp': '83 どうするかを決めるとき、僕は論理ではなく本能を当てにする。',
      'en': '83 In making a decision, I rely not on logic but on instinct.'
    },
    '84': {
      'jp': '84 彼は独創的かつ賢明な解決策を考え出し、直ちにそれを実行に移した。',
      'en': '84 He came up with an ingenious, sensible solution and immediately put it into practice.'
    },
    '85': {
      'jp': '85 客観的に見れば、前者は後者よりも劣っている。',
      'en': '85 From an objective viewpoint, the former is inferior to the latter.'
    },
    '86': {
      'jp': '86 あなたの考えは理論上はすばらしそうだけれども、実際には機能しないと思います。',
      'en': "86 Your idea sounds marvelous in theory, yet I don't think it will work in practice."
    },
    '87': {
      'jp': '87 私たちは彼が相手に勝つことを期待したが、彼はその期待に応えられなかった。',
      'en': '87 We expected him to defeat his opponent, but he failed to live up to our expectations.'
    },
    '88': {
      'jp': '88 皮肉なことだが、彼らの最善の努力にもかかわらず、任務は完全な失敗に終わった。',
      'en': '88 Ironically, despite their best endeavors, their mission resulted in complete failure.'
    },
    '89': {
      'jp': '89 実地経験の不足は彼女の天賦の才能で補える。',
      'en': '89 Her genius makes up for her lack of firsthand experience.'
    },
    '90': {
      'jp': '90 彼女にはどんな障害をも克服できるすばらしい能力がある。',
      'en': '90 She possesses a great capacity for overcoming any obstacle.'
    },
    '91': {
      'jp': '91 あなたの強固な支援がなかったら、その取引は成立しなかったでしょう。感謝しています。',
      'en': "91 Without your solid support, the deal would have fallen through. I'm grateful to you."
    }
  },
  '4': {
    '36': {
      'jp': '36 その発電所は遠く離れた郡に電気を供給している。',
      'en': '36 The power plant supplies the remote county with electricity.'
    },
    '37': {
      'jp': '37 許可なくこの装置を操作することはできません。',
      'en': '37 You are not allowed to operate this device without permission.'
    },
    '38': {
      'jp': '38 実は、住民たちは放射能にさらさせてきた。',
      'en': '38 In fact, the inhabitants have been exposed to radiation.'
    },
    '39': {
      'jp': '39 核エネルギーの潜在的な危険性は､いくら強調してもし過ぎるということはない。',
      'en': '39 One cannot emphasize too much the potential danger of nuclear energy.'
    },
    '40': {
      'jp': '40 過去数年間その問題を見過ごしていた報道機関が､今ではどちらかと言えばそのことを重視し過ぎている。',
      'en': '40 For years the press overlooked the problem. But now, if anything, they are making too much of it.'
    },
    '41': {
      'jp': '41 穀物を栽培するだけでなく、その農業経営者は食料雑貨店も経営している。',
      'en': '41 As well as cultivating grain, the farmer runs a grocery store.'
    },
    '42': {
      'jp': '42 その研究所は1960年代後半に設立された。',
      'en': '42 The research institute was established in the late 1960s.'
    },
    '43': {
      'jp': '43 スターさんに直接相談したらどうですか？ この辺りでは文句なしでいちばん有名な弁護士ですよ。',
      'en': "43 Why don't you consult Starr in person? He's by far the most prominent attorney around here."
    },
    '44': {
      'jp': '44 念のためメモしておきます。記憶力が悪いから。',
      'en': "44 I'll write it down just in case, because I have a bad memory."
    },
    '45': {
      'jp': '45 弁護士は依頼人に、保険会社に対して法的手段を取る事を勧めた。',
      'en': '45 The lawyer recommended that his client take legal action against the insurance company.'
    }
  },
  '6': {
    '63': {
      'jp': '63 「ほかにご注文は?」「こちらでお召し上がりですか？」「持ち帰ります。」',
      'en': "63 \"Anything else?\" \"That's it.\" \"For here or to go?\" \"To go.\""
    },
    '64': {
      'jp': '64 「この敷物はおいくらですか?」「税込みで100ドルです」「じゃあ、これにします。」',
      'en': "64 \"How much is this rug? \"\$100 including tax.\" \"OK, I'll take it.\""
    },
    '65': {
      'jp': '65 そのパンツはあなたには似合わないと思う。こっちをはいてみて。今すごく流行っているのよ。',
      'en': "65 I don't think those pants look good on you. Try these on. They're really in now!"
    },
    '66': {
      'jp': '66 彼は「おつりはいいです」と言って、急いでタクシーを降りた。',
      'en': '66 He got out of the cab in haste, saying, \"Keep the change.\"'
    },
    '67': {
      'jp': '67 当店のお客様は､わずかな追加料金で配達サービスをご利用できます。',
      'en': '67 Delivery service is available to our customers for a slight extra charge.'
    },
    '68': {
      'jp': '68 「これは僕のおごり。」 「だめよ。外食のときはいつもおごってもらっているし。」 「うーん、わかった。じゃあ割り勘にしよう。」',
      'en': "68 \"It's on me.\" \"No. You treat me every time we eat out.\" \"Well, okay. Let's split the check then.\""
    },
    '69': {
      'jp': '69 ショッピングセンターをぶらぶらしていたら、偶然ケンに会った。',
      'en': '69 While I was hanging out at the mall, I ran into Ken.'
    },
    '70': {
      'jp': '70 現金が足りなかったので、先週口座に入れた1000ドルを引き出した。',
      'en': '70 I was short of cash, so I withdrew the \$100 that I had deposited in my bank account last week.'
    },
    '71': {
      'jp': '71 彼女は帰宅途中にハンドバッグを盗まれた。',
      'en': '71 On her way home she was robbed of her purse.'
    },
    '72': {
      'jp': '72 「それは変だわ。どうしてそんなことが起きたのか教えて。」 「後で説明するよ。」',
      'en': "72 \"That's odd! Tell me how it happened.\" \"I'll explain it to you later.\""
    },
    '73': {
      'jp': '73 私が約束を破ったので、罰として両親に門限を６時にされた。',
      'en': '73 My parents gave me a 6 pm curfew as a punishment because I broke my promise.'
    },
    '74': {
      'jp': '74 諺にある通り、「嘘も方便 （目的が手段を正当化する）」。',
      'en': '74 As the proverb goes, \"The end justifies the means.\"'
    },
    '75': {
      'jp': '75 誰も頼れる人がいないとわかったのだから、自分の力でやっていくしかない。',
      'en': "75 Now that I've found that there's no one to turn to, I'll have to stand on my own two feet."
    }
  },
  '11': {
    '126': {
      'jp': '126 たった一つの家具を除けば、講堂はがらんどうだった。',
      'en': '126 The auditorium was empty except for a single piece of furniture.'
    },
    '127': {
      'jp': '127 家賃が安ければ、どんなマンションでも構いません。こだわりはありませんから。',
      'en': "127 Any apartment will do as long as the rent is low. I'm not particular about it."
    },
    '128': {
      'jp': '128 彼の60歳のいとこが湖畔の不動産を相続した。',
      'en': '128 His sixty-year-old cousin inherited a piece of real estate by a lake.'
    },
    '129': {
      'jp': '129 雑談はこの辺にして、本題に入りましょう。',
      'en': "129 So much for small talk. Let's get down to business."
    },
    '130': {
      'jp': '130 ルーシーは、契約書にサインさせようとする強引な販売員に腹を立てた。',
      'en': '130 Lucy resented the aggressive salesman trying to make her sign the contract.'
    },
    '131': {
      'jp': '131 私たちの株式投資への意欲をそぐような要因がかなりある。',
      'en': '131 There are a number of factors discouraging us from investing in stocks.'
    },
    '132': {
      'jp': '132 日本は様々な原料を輸入し、工業製品を輸出している。',
      'en': '132 Japan imports various raw materials and exports manufactured goods.'
    },
    '133': {
      'jp': '133 経済発展の過程で、日本はその伝統的価値観を捨ててきた。',
      'en': '133 In the course of its economic development, Japan has abandoned its traditional values.'
    },
    '134': {
      'jp': '134 世界はかつてない危機に直面している。',
      'en': '134 The world is faced with an unprecedented crisis.'
    },
    '135': {
      'jp': '135 要するに、その規制の目的は国内産業の保護だ。',
      'en': '135 In short, the purpose of the regulations is to protect domestic industries.'
    },
    '136': {
      'jp': '136 世界での競争力を維持するためには、日本は大幅な規制緩和に真剣に着手しなければならない。',
      'en': '136 In order to keep up its competitiveness in the world, Japan must undertake sweeping deregulation in earnest.'
    }
  },
  '8': {
    '92': {
      'jp': '92 機内への可燃物の持ち込みは禁止されています。',
      'en': '92 Bringing flammable items into the cabin is prohibited.'
    },
    '93': {
      'jp': '93 ちょっとした事故が原因で、私たちのウィーン行きの便に遅れが出た。',
      'en': '93 Our flight to Vienna was delayed on account of a minor accident.'
    },
    '94': {
      'jp': '94 飛行機が爆発して海に墜落し、乗っていた全員が死亡した。',
      'en': '94 The plane blew up and plunged into the ocean, killing all the people on board.'
    },
    '95': {
      'jp': '95 彼らは昼夜休むことなく、その墜落事故の原因を調査している。',
      'en': '95 They are working around the clock looking into the cause of the crash.'
    },
    '96': {
      'jp': '96 不幸にも、その大惨事で生き残った乗客はほとんどいなかった。',
      'en': '96 Unfortunately, few passengers survived the catastrophe.'
    },
    '97': {
      'jp': '97 航空評論家が統計を詳細に分析した。',
      'en': '97 The aviation expert analyzed the statistics in detail.'
    },
    '98': {
      'jp': '98 全従業員を代表いたしまして、犠牲者の方々に対してお悔やみを申し上げたいと存じます。',
      'en': "98 On behalf of all the staff, I'd like to express our sympathy for the victims."
    },
    '99': {
      'jp': '99 ある意味、その惨事の責任は彼にある。',
      'en': '99 In a sense, he is to blame for the disaster.'
    },
    '100': {
      'jp': '100 車両は欠陥がないか3ケ月に1度検査される。',
      'en': '100 The vehicles are inspected for defects every three months.'
    }
  },
  '14': {
    '156': {
      'jp': '156 課題は電子メールで6月10日の午後5時までに提出して下さい。',
      'en': '156 Please hand in your assignment via e-mail no later than 5:00 PM on June 10.'
    },
    '157': {
      'jp': '157 ジョーが勤勉なんてとんでもない。だからまた数学を落としたんだ。',
      'en': "157 Joe is anything but diligent. That's why he flunked math again."
    },
    '158': {
      'jp': '158 彼の論文は意味不明。第一、主題が曖昧だ。',
      'en': "158 His thesis doesn't make sense. To begin with, its theme is obscure."
    },
    '159': {
      'jp': '159 彼の小論文は簡潔で要領を得ていた。',
      'en': '159 His essay was concise and to the point.'
    },
    '160': {
      'jp': '160 「この複雑な問題をどう処理するつもり？｣ ｢任せとけって。朝飯前さ。」',
      'en': "160 \"How are you going to deal with this complicated problem?\" \"Leave it to me! It's a piece of cake.\""
    },
    '161': {
      'jp': '161 「ニック、これを提出する前にざっと目を通して欲しいの。」 「ごめん、今、手が離せないんだ。」',
      'en': '161 \"Nick, I want you to look this over before I turn it in.\" \"Sorry, but I have my hands full right now.\"'
    },
    '162': {
      'jp': '162 「締め切りに間に合わなかったらどうなる？」 「きっと彼に怒られるぞ！」',
      'en': "162 \"What if I don't meet the deadline?\" \"I bet he'll get mad at you!\""
    },
    '163': {
      'jp': '163 字が汚いことを別にすれば、君の要約は完璧だ。',
      'en': '163 Your summary leaves nothing to be desired apart from the terrible handwriting.'
    },
    '164': {
      'jp': '164 その前提が妥当かどうかよく考えるべきだ。',
      'en': '164 You ought to think over whether the premise is valid or not.'
    },
    '165': {
      'jp': '165 とりわけ、科学用語には厳密な定義が要求される。',
      'en': '165 Above all, scientific terms call for precise definitions'
    }
  },
  '15': {
    '166': {
      'jp': '166 何よりもまず、公式を暗記しなさい。',
      'en': '166 First of all, learn the formula by heart.'
    },
    '167': {
      'jp': '167 体積を計算する場合は、縦と横と深さを掛けます。',
      'en': '167 To calculate the volume, multiply the length by the width by the depth.'
    },
    '168': {
      'jp': '168 樽の底にとても小さなひびがあるのを見つけた。',
      'en': '168 Tiny cracks were found in the bottom of the barrel.'
    },
    '169': {
      'jp': '169 この章では幾何学の概念に焦点をあてます。',
      'en': '169 This chapter will focus on the concepts of geometry.'
    },
    '170': {
      'jp': '170 フィルは実用的な技能よりも学問的なテーマのほうに興味がある。',
      'en': '170 Phil is much more interested in academic subjects than in practical skills.'
    },
    '171': {
      'jp': '171 ｢この顕微鏡、どこかおかしくなっちゃった。修理してもらわないと。」 「見せて。僕が直せるかも。」',
      'en': "171 \"Something's gone wrong with this microscope. I need to have it repaired.\" \"Let me see it. Maybe I can fix it.\""
    },
    '172': {
      'jp': '172 「インストゥルメントって何ですか？」「例えば、温度計や気圧計とかの計器がそうです。」',
      'en': "172 \"What is 'an instrument?\" \"For instance, a gauge, such as a thermometer or a barometer.\""
    },
    '173': {
      'jp': '173 その微粒子は肉眼でもかろうじて見える。',
      'en': '173 The minute particles are barely visible to the naked eye.'
    },
    '174': {
      'jp': '174 筋肉組織はおびただしい数の細胞から成っている。',
      'en': '174 Muscle tissue consists of a vast number of cells.'
    },
    '175': {
      'jp': '175 この物質は主に水素と酸素でできている。',
      'en': '175 This substance is mostly composed of hydrogen and oxygen.'
    },
    '176': {
      'jp': '176 正確な気温はセ氏22.68度です。',
      'en': '176 The exact temperature is 22.68 degrees Celsius.'
    }
  },
  '12': {
    '137': {
      'jp': '137 危機にさらされ、わらにもすがる思いでいる人々を、私たちは放っておけない。',
      'en': '137 We cannot turn our backs on desperate people who are at risk.'
    },
    '138': {
      'jp': '138 議会は発展途上国に財政援助を行うことを決議した。',
      'en': '138 The parliament decided to provide developing countries with financial aid.'
    },
    '139': {
      'jp': '139 英国の君主制は廃止されるべきだと言う人もいるけど、あなたはどう思う？',
      'en': '139 Some say the British monarchy should be abolished. What do you think?\"'
    },
    '140': {
      'jp': '140 彼らは攻撃を逃れる安全な場所を探したが、隠れる場所はどこにもなかった。',
      'en': '140 They sought shelter from the attack but found no place to hide.'
    },
    '141': {
      'jp': '141 軍縮において、両国が大きな進展を遂げる見込みはほとんどない。',
      'en': "141 There's little prospect that the two countries will make significant progress in disarmament."
    },
    '142': {
      'jp': '142 交渉は進行中だ。そろそろ正念場を迎えるだろう。',
      'en': '142 The negotiations are under way. Before long, they will enter a crucial phase.'
    },
    '143': {
      'jp': '143 奴隷たちは自分たちの運命を変えたいと切望していた。',
      'en': '143 The slaves were anxious to alter their destinies.'
    },
    '144': {
      'jp': '144 貴族たちは思うがままに特権を乱用した。',
      'en': "144 The aristocrats abused their privileges to their hearts' content."
    },
    '145': {
      'jp': '145 結局、革命それ自体は何の成果ももたらさなかった。',
      'en': '145 The revolution in itself, bore no fruit, after all.'
    }
  },
  '16': {
    '177': {
      'jp': '177 「ナオミは自分の完璧なスタイルをひけらかしたがる。私も彼女みたいに痩せていればなあ。彼女が羨ましいわ。｣ ｢ダイエットすれば。」',
      'en': '177 \"Naomi likes to show off her perfect figure. I wish I were thin like her. I envy her.\" \"You could go on a diet.\"'
    },
    '178': {
      'jp': '178 ナオミに一目惚れした。３ケ月後、思い切って彼女にプロポーズしてみたが振られてしまった。',
      'en': '178 I fell in love with Naomi at first sight. Three months later, I took a chance and proposed to her, but she turned me down.'
    },
    '179': {
      'jp': '179 偶然その人に出会ったの。優しくて頭もいいの。おまけに独身！',
      'en': "179 I met the man by chance. He's gentle and smart. What's more, he's single!"
    },
    '180': {
      'jp': '180 彼の甥は、謙虚で思いやりのある人になるように育てられた。',
      'en': '180 His nephew was brought up to be modest and considerate.'
    },
    '181': {
      'jp': '181 私の両親にボブを紹介したら、二人ともすぐに彼のことが好きになった。',
      'en': '181 I introduced Bob to my folks, and they took to him at once.'
    },
    '182': {
      'jp': '182 人は外見ではなく、むしろ中身で判断されるべきだ。',
      'en': '182 People should be judged not so much by how they look as by who they are.'
    },
    '183': {
      'jp': '183 「大切なのは肩書きなんかじゃない。絶対そうだ！」と、ボブは語気を強めて言った。',
      'en': "183 \"It's not your title that counts. That's for sure!\" exclaimed Bob."
    },
    '184': {
      'jp': '184 自分の力で成功をつかんだ人が言ったように、「先見の明のある人は最後には成功する」。',
      'en': '184 As a self-made man put it, \"A man of vision will make good in the end.\"'
    },
    '185': {
      'jp': '185 若さが永遠のものではないことを忘れてはいけない。',
      'en': '185 Keep in mind that youth is not eternal'
    }
  },
  '13': {
    '146': {
      'jp': '146 ボブが「それには反対だ！」と言って会話に割り込んできた。けれども、誰も耳を貸さなかった。',
      'en': "146 Bob cut in on our conversation, saying, \"I'm against it!\" But everybody ignored him."
    },
    '147': {
      'jp': '147 私たちは彼の順番をわざと飛ばした。',
      'en': '147 We skipped his turn on purpose.'
    },
    '148': {
      'jp': '148 誰かがいじめられているのを見たのに、彼は見ないふりをした。',
      'en': '148 He saw someone being bullied, but he turned a blind eye.'
    },
    '149': {
      'jp': '149 ニックと僕がテストでカンニングしたとき、僕は停学処分。ニックの方はまんまと逃れた。',
      'en': '149 When Nick and I cheated on an exam, I was suspended from school. As for Nick, he got away with it.'
    },
    '150': {
      'jp': '150 彼らはリチャードの富と地位に対する嫉妬から、彼に敵意を抱いている。',
      'en': '150 They are hostile to Richard because they are jealous of his wealth and status.'
    },
    '151': {
      'jp': '151 彼のことは大嫌い。まるで自分が大物であるかのように振る舞うのよ。',
      'en': '151 I hate him! He behaves as if he were somebody.'
    },
    '152': {
      'jp': '152 僕たちがほめ言葉をかけたのに、彼は顔をしかめてそっぽを向いた。失礼だ！',
      'en': '152 In spite of our compliments, he frowned and turned away. He was so rude!'
    },
    '153': {
      'jp': '153 その莫大な財産は自分が自由にできるものだ、と彼は主張した。',
      'en': '153 He claimed that the enormous property was at his disposal.'
    },
    '154': {
      'jp': '154 頑固になればなるほど孤立するよ。',
      'en': '154 The more stubborn you are, the more isolated you become.'
    },
    '155': {
      'jp': '155 「遠回しな言い方はやめてくれ！僕にどうしろって言うんだ？」 「慌てずに待つしかありません。時が経てばわかります。」',
      'en': "155 \"Don't beat around the bush! What am I supposed to do?\" \"Just wait and see. Time will tell.\""
    }
  },
  '22': {
    '256': {
      'jp': '256 ほとんどの場合、近代化は西欧化と同一のことと見なされる。',
      'en': '256 For the most part, modernization is identified with westernization.'
    },
    '257': {
      'jp': '257 都会の文化は多くの人々の目には魅力的に映る。とりわけ、若者にとっては。',
      'en': '257 Urban culture appears to be attractive to many people, in particular, to younger people.'
    },
    '258': {
      'jp': '258 AIは人工知能の略です。',
      'en': '258 \"AI stands for \"artificial intelligence.\"'
    },
    '259': {
      'jp': '259 家庭用の電化製品は日に日に便利になっている。',
      'en': '259 Household appliances are becoming more convenient day by day.'
    },
    '260': {
      'jp': '260 私の収入は四人家族を養うには十分でないけれども、それで何とかやっていくしかない。',
      'en': '260 My income is not adequate to provide for my family of four, but we have to make the best of it.'
    },
    '261': {
      'jp': '261 ホームページの人気は内容次第。',
      'en': '261 The popularity of a website depends on its content.'
    },
    '262': {
      'jp': '262 遅れずについていかなくちゃ。一度遅れをとったら追い付くのは大変だよ。',
      'en': "262 You've got to keep up with it. Once you fall behind, it's hard to catch up."
    },
    '263': {
      'jp': '263 技術は急速に進歩するので、遅れを取らずについていくのは大変だ。',
      'en': "263 As technology rapidly advances, it's tough to keep pace with it."
    },
    '264': {
      'jp': '264 ますます多くの人々が、その媒体の双方向的な性質を利用しようと躍起になっている。',
      'en': '264 More and more people are rushing to make use of the interactive nature of the medium.'
    },
    '265': {
      'jp': '265 革新的なものを生み出すこと、それは変わった現象を見逃さない能力と何らかの関係がある。',
      'en': '265 Innovation has something to do with the ability to notice unusual phenomena.'
    },
    '266': {
      'jp': '266 多くの他社が我々の優れた方法を真似している。',
      'en': '266 A bunch of other companies are imitating our excellent methods.'
    },
    '267': {
      'jp': '267 かつての荒涼とした盆地が、繁栄を謳歌するハイテクビジネスの中心地に変ぼうした。',
      'en': '267 The once desolate valley was transformed into a thriving hub of hi-tech business.'
    },
    '268': {
      'jp': '268 まだ改善の余地はたくさんあるけれども、彼の発明品はあらゆる点で従来の機器よりも優れている。',
      'en': "268 Although there's still plenty of room for improvement, his invention is superior to conventional equipment in every respect."
    },
    '269': {
      'jp': '269 その会社の強さは、他社にない未来志向の戦略によって生み出されている。',
      'en': '269 The strength of the firm is attributed to its unique and future-oriented strategies.'
    },
    '270': {
      'jp': '270 ソニーはこのスゴイ機器に多岐にわたる機能を統合させた。全米で評判になり始めている商品だ。',
      'en': "270 SONY has integrated a wide range of functions into this cool gadget. It's catching on from coast to coast."
    },
    '271': {
      'jp': '271 この道具は何かと便利だから、いつも手元に置いています。',
      'en': '271 This tool comes in handy, so I always keep it close at hand.'
    },
    '272': {
      'jp': '272 「一般的に、消費者は質よりも量を選びます。」 「今は全く逆です。」',
      'en': "272 \"In general, consumers prefer quantity to quality.\" \"It's the other way around today.\""
    }
  },
  '21': {
    '241': {
      'jp': '241 石油は天の恵みであると同時に災いのもとであると、その生態学者は我々に繰り返し警告してきた。',
      'en': '241 The ecologist has warned us time and again that petroleum is not only a blessing but also a curse.'
    },
    '242': {
      'jp': '242 その大陸は化石燃料が豊富だ。',
      'en': '242 The continent is abundant in fossil fuels.'
    },
    '243': {
      'jp': '243 その地域は鉱物資源が比較的豊かだ。',
      'en': '243 The region is relatively rich in mineral resources.'
    },
    '244': {
      'jp': '244 小麦はこの地域の農業生産高のおよそ3分の2を占めている。',
      'en': '244 Wheat accounts for approximately two-thirds of agricultural production in the area.'
    },
    '245': {
      'jp': '245 良い収穫を得るためには、肥沃な土壌が不可欠だ。',
      'en': '245 Fertile soil is indispensable for a good harvest.'
    },
    '246': {
      'jp': '246 湿気の多い気候はその半島の特色です。',
      'en': '246 A humid climate is characteristic of the peninsula.'
    },
    '247': {
      'jp': '247 その活火山は周期的に噴火する。',
      'en': '247 The active volcano erupts at regular intervals.'
    },
    '248': {
      'jp': '248 パナマ運河は大西洋と太平洋をつないでいる。',
      'en': '248 The Panama Canal connects the Atlantic with the Pacific.'
    },
    '249': {
      'jp': '249 ここの地理的特徴は、私たちの県のそれと似ている。',
      'en': '249 The geographical features here are similar to those of our prefecture.'
    },
    '250': {
      'jp': '250 たいてい、飢饉になると疫病も発生する。',
      'en': '250 More often than not, famine is accompanied by plague.'
    },
    '251': {
      'jp': '251 壊滅的規模の地震が州都を襲い、数万人の住民が家を失った。',
      'en': '251 A devastating earthquake hit the state capital, leaving tens of thousands of residents homeless.'
    },
    '252': {
      'jp': '252 「気をつけろっ！天井が崩れかけてるぞ！」',
      'en': '252 \"Watch out! The ceiling is giving way!\"'
    },
    '253': {
      'jp': '253 台風は速度を上げて沿岸に接近しそうだと天気予報では言っている。',
      'en': '253 The weather forecast says the typhoon is likely to accelerate and approach the coast.'
    },
    '254': {
      'jp': '254 「試合が中止になるかどうか、まだ決まらないんだ。」 「それがどうしたの？私にとってはどうでもいいことだわ。」',
      'en': "254 \"It's still up in the air whether the game will be called off or not.\" \"So what? It makes no difference to me.\""
    },
    '255': {
      'jp': '255 「霧が濃いね。」 「本当ね。でも、たぶんこのあとは晴れるわ。」',
      'en': "255 \"It's foggy, isn't it?\" \"It sure is. But chances are it'll clear up later on.\""
    }
  },
  '27': {
    '314': {
      'jp': '314 海外に行くと必ず、時差ボケと下痢に悩まされる。',
      'en': '314 Whenever I go abroad, I suffer from jet lag and diarrhea.'
    },
    '315': {
      'jp': '315 「何だか目まいと吐き気がするよ。」 「顔が真っ青よ。」',
      'en': '315 \"I feel sort of dizzy and I feel like throwing up.\" \"You look pale!\"'
    },
    '316': {
      'jp': '316 鎮痛剤を飲めば、すぐに頭痛は治まります。',
      'en': '316 Take some aspirin. It will cure you of your headache in no time.'
    },
    '317': {
      'jp': '317 「何だか体調が悪いなあ。」 「一日休みを取った方がいいわよ。」',
      'en': "317 \"I'm afraid I'm coming down with something.\" \"You should take a day off.\""
    },
    '318': {
      'jp': '318 この飲料に含まれている成分には有害なものもある。とりわけ、妊娠中の人にとっては。',
      'en': '318 Some of the ingredients in this beverage are harmful, especially if you are pregnant.'
    },
    '319': {
      'jp': '319 十分な栄養摂取は幼児の発育にとって極めて重要です。',
      'en': "319 Good nutrition is vital for an infant's growth."
    },
    '320': {
      'jp': '320 適度な運動は血行をよくする。',
      'en': '320 Moderate exercise stimulates the circulation of the blood.'
    },
    '321': {
      'jp': '321 当分の間は酒を控えるようにと、医者に忠告された。',
      'en': '321 My physician advised me to refrain from alcohol for the time being.'
    },
    '322': {
      'jp': '322 本当に体調を良くしたいし、減量もしたいから、毎朝泳ぎに行っています。',
      'en': '322 I do want to get into shape and lose some weight, so I go swimming every morning.'
    },
    '323': {
      'jp': '323 昨日の夜更かしがたたって、彼はひどい風邪をひいた。',
      'en': '323 He caught a nasty cold because he stayed up late last night.'
    },
    '324': {
      'jp': '324 外科医に説得されて、彼は臓器移植手術を受けることにした。',
      'en': '324 The surgeon persuaded him to undergo an organ transplant.'
    },
    '325': {
      'jp': '325 父が寝たきりなので私たちが交代で面倒を見ています。',
      'en': '325 Since our father is bedridden, we take turns looking after him.'
    },
    '326': {
      'jp': '326 ジャンクフードの過剰な摂取は早死にの一因になる、というのが我々の仮説だ。',
      'en': '326 Our hypothesis is that eating excessive amounts of junk food contributes to early mortality.'
    },
    '327': {
      'jp': '327 政府は感染の拡大を未然に防ぐための適切な措置を取らなかった。',
      'en': '327 The government did not take appropriate measures to prevent the infection from spreading.'
    },
    '328': {
      'jp': '328 その大臣は内閣からの辞任を余儀なくされた。',
      'en': '328 The minister was obliged to resign from the Cabinet.'
    }
  },
  '18': {
    '198': {
      'jp': '198 彼が私の目を見ようとしなかったので、何かを隠していると思った。',
      'en': "198 It occurred to me that he was holding something back, because he wouldn't look me in the eye."
    },
    '199': {
      'jp': '199 彼女は我慢しきれなくなり、襟首をつかんで彼をののしった。',
      'en': '199 When her patience gave out, she grabbed his collar and swore at him.'
    },
    '200': {
      'jp': '200 確かに、私たちは時々口げんかもしますが、普段は仲良くやっています。',
      'en': "200 I must admit we quarrel every now and then, but generally we're on good terms with each other."
    },
    '201': {
      'jp': '201 「君の家に寄ってもいいかい？」 「もちろんいいわよ。気兼ねなく！」',
      'en': '201 \"Do you mind if I stop by your house?\" \"No, not at all. Be my guest!\"'
    },
    '202': {
      'jp': '202 ちょっと待ってて。すぐ戻るから。切らないでよ！（電話で）',
      'en': "202 Hold on. I'll be right back. Don't hang up!"
    },
    '203': {
      'jp': '203 うちには泊められないわ。一つには、時々お父さんがふらっとやって来るから。',
      'en': "203 I can't put you up. For one thing, my dad drop in on me from time to time."
    },
    '204': {
      'jp': '204 ジェニファーがじっと立っている間、ボブは歩道を行ったり来たりしていた。',
      'en': '204 While Jennifer was standing still, Bob was pacing back and forth along the sidewalk.'
    },
    '205': {
      'jp': '205 「仲直りしようよ、リサ。」 「私がいて当然だなんて思わないで。私たち、今度は永遠に終わりよ。本気なんだから！」',
      'en': "205 \"Let's make up, Lisa.\" \"Stop taking me for granted! We're through for good this time. I mean it!\""
    },
    '206': {
      'jp': '206 おい！リサ、そう感情的になるなよ。君を傷つけるつもりじゃなかったんだ。じっくり話し合おう。',
      'en': "206 Come on! Don't get so emotional, Lisa. I didn't mean to hurt you. Let's talk it over."
    },
    '207': {
      'jp': '207 「私を裏切ったわね！」 「許してくれよ。どうしたら埋め合わせができるかなあ？」 「仕返ししてやるっ！」',
      'en': "207 \"You betrayed me!\" \"Please forgive me. How can I make it up to you?\" \"I'll get even!\""
    },
    '208': {
      'jp': '208 自分の罪は隠しておかずに告白したほうがいい。',
      'en': '208 You should confess your sins rather than conceal them.'
    },
    '209': {
      'jp': '209 約束は守りなさい。そうしないと評判を落としますよ。',
      'en': "209 Keep your word; otherwise you'll end up losing face."
    },
    '210': {
      'jp': '210 ボブは自分の道徳的信条を曲げない男だ。正直でいれば最後には報われると信じている。',
      'en': '210 Bob sticks to his moral principles and believes that honesty pays off in the long run.'
    },
    '211': {
      'jp': '211 「元気を出して。仕方ないわ。」 「やれるだけのことはやったんだ。」 「わかってる。過ぎたことにくよくよしないで。やり直せるわよ！」',
      'en': "211 \"Cheer up! You couldn't help it.\" \"I did my best.\" \"I know. Don't dwell on the past. You can start over!\""
    }
  },
  '19': {
    '212': {
      'jp': '212 「ジェーン、タイムズ・スクェアーまで乗せて行って欲しいんだけど。」 「そうしてあげたいのは山々だけど。今、全然時間がないの。」',
      'en': "212 \"Jane, please do me a favor and give me a ride to Times Square.\" \"I wish I could, but I'm tied up right now.\""
    },
    '213': {
      'jp': '213 いつものように、マイクは時間通りに現れた。本当に時間に正確な人だ。」',
      'en': "213 As usual, Mike turned up on time. He's very punctual."
    },
    '214': {
      'jp': '214 この前、混雑した幹線道路の真ん中でガス欠してしまった。',
      'en': '214 The other day I ran out of gas in the middle of a busy Interstate.'
    },
    '215': {
      'jp': '215 私の前を走っていたトラックがスリップして横転し、積み荷を路面いっぱいに散乱させた。',
      'en': '215 A truck driving ahead of me skidded, turned over, and scattered its load all over the road.'
    },
    '216': {
      'jp': '216 衝突を避けられたのは運が良かっただけ、と彼は回想した。',
      'en': '216 He recalled that a collision had been avoided by sheer luck.'
    },
    '217': {
      'jp': '217 緊急の際には、すぐに私の代理人と連絡を取って下さい。',
      'en': '217 In case of an emergency, get in touch with my agent right away.'
    },
    '218': {
      'jp': '218 「ジェーン、俺たちはどこに向かってるんだ？」 「迷ったみたい。違う方向に来ちゃったわ。」 「何だよ。車を止めてくれ！」',
      'en': "218 \"Jane, where are we heading?\" \"I think we're lost. We went in the wrong direction.\" \"Damn! Pull over!\""
    },
    '219': {
      'jp': '219 僕のさびついたフォードが故障して、交差点をふさいでしまった。',
      'en': '219 My rusty Ford broke down, obstructing the intersection.'
    },
    '220': {
      'jp': '220 表面に細かい傷やへこみがたくさんあるから、磨いても無駄だよ。',
      'en': "220 There are so many fine scratches and dents on its surface, it's no use polishing it."
    },
    '221': {
      'jp': '221 「おい、渋滞にはまっちゃったよ！」 「熱くならないで、ジョー。近道しましょう。時間までには着けるわ。」',
      'en': "221 \"Hey, we're stuck in a traffic jam!\" \"Chill out, Joe. Let's take a shortcut! We'll get there in time.\""
    },
    '222': {
      'jp': '222 「パンクしちゃったよ。手を貸してくれる？」 「喜んで。」',
      'en': "222 \"I've got a flat tire. Can you give me a hand?\" \"I'd be glad to.\""
    },
    '223': {
      'jp': '223 ハンドルがきかなくなった救急車が、危うく歩行者をひきそうになった。',
      'en': '223 The ambulance went out of control and came close to running over a pedestrian.'
    }
  },
  '17': {
    '186': {
      'jp': '186 いったいなぜみんながそれ程までにボブを軽蔑するのか、僕にはわからない。',
      'en': "186 I can't figure out why on earth everybody feels so much contempt for Bob!"
    },
    '187': {
      'jp': '187 彼のことを笑わずにはいられない。ばかな間違いを繰り返すからね。きっと彼は懲りないんだろうな。',
      'en': "187 I can't help laughing at him because he keeps on making stupid mistakes. He'd be the last person to learn his lesson."
    },
    '188': {
      'jp': '188 さらに厄介なことに、彼は私たちに迷惑をかけていることさえわかっていない。',
      'en': "188 To make matters worse, he isn't even conscious of annoying us."
    },
    '189': {
      'jp': '189 慌てていたから、手袋を間違えて裏返しにはめてしまった。',
      'en': '189 Since I was in a hurry, I put my gloves on inside out by mistake.'
    },
    '190': {
      'jp': '190 デイブはデブでドジ。浅い小川を飛び越えた時に、つまずいて足首を捻挫したんだ。',
      'en': '190 Dave is fat and clumsy. When he leaped over the shallow stream, he stumbled and twisted his ankle.'
    },
    '191': {
      'jp': '191 「僕、高所恐怖症なんだ。」 「弱虫っ！」',
      'en': "191 \"I'm scared of heights.\" \"You're a coward!\""
    },
    '192': {
      'jp': '192 消極的なその男性が、人前で自己表現をすることはまずない。',
      'en': '192 The passive man seldom, if ever, expresses himself in public.'
    },
    '193': {
      'jp': '193 迷信はすべて根拠のないものだということが、ニックに言われてよくわかった。',
      'en': '193 Nick convinced me that all superstitions are irrational.'
    },
    '194': {
      'jp': '194 注射のことを考えると、怖くて震えてしまう。',
      'en': '194 I tremble with fear at the thought of an injection.'
    },
    '195': {
      'jp': '195 ボブは根が怠け者だから、与えられた仕事をしばしば怠る。',
      'en': '195 Since Bob is lazy at heart, he frequently neglects his duties.'
    },
    '196': {
      'jp': '196 ボブが働いている間、ジェニファーは家でくだらないメロドラマに夢中になっていた。',
      'en': '196 While Bob was at work, Jennifer was at home absorbed in silly soap opera.'
    },
    '197': {
      'jp': '197 ボブはマンガ好きだけど、僕にはそれほどいいものとは思えない。実際、つまらないよ。',
      'en': "197 Bob likes cartoons, but I don't think much of them. As a matter of fact, they're boring"
    }
  },
  '20': {
    '224': {
      'jp': '224 火星にはかつて原始的な生物が存在していたと彼は力説している。',
      'en': '224 He contends that primitive life once existed on Mars.'
    },
    '225': {
      'jp': '225 乗組員たちは宇宙への航海の準備に忙しい。',
      'en': '225 The crew is busy preparing for the voyage into outer space.'
    },
    '226': {
      'jp': '226 彼らは無重力状態で一連の実験をおこなった。',
      'en': '226 They conducted a series of experiments under zero gravity.'
    },
    '227': {
      'jp': '227 多くの天文学者は、宇宙は無限に膨張を続けていくものと考えている。',
      'en': '227 Many astronomers assume that the universe will expand infinitely.'
    },
    '228': {
      'jp': '228 宇宙飛行士たちは自然と沸き起こった拍手で迎えられた。',
      'en': '228 The astronauts were greeted with spontaneous applause.'
    },
    '229': {
      'jp': '229 滅亡の危機に瀕した地球を守ろうと、ある基金が設立された。',
      'en': '229 A fund was set up with a view to preserving our endangered planet.'
    },
    '230': {
      'jp': '230 大洪水で現地の交通網が麻痺した。',
      'en': '230 The massive flood paralyzed the local transportation network.'
    },
    '231': {
      'jp': '231 赤道は地球を二つの半球に分ける。',
      'en': '231 The equator divides the globe into two hemispheres.'
    },
    '232': {
      'jp': '232 毛皮のコートのために動物を罠で捕獲するのは残酷なことだ。',
      'en': "232 I think it's cruel to trap animals for fur coats."
    },
    '233': {
      'jp': '233 その団体は野生動物の保護において、最も重要な役割を果たしている。',
      'en': '233 The organization plays a principal role in wildlife conservation.'
    },
    '234': {
      'jp': '234 多くの弱い生物種が絶滅の危機に瀕している。',
      'en': '234 Many fragile species are on the verge of extinction.'
    },
    '235': {
      'jp': '235 長引く干ばつが収穫に甚大な被害をもたらした。',
      'en': '235 The prolonged drought did severe damage to the crops.'
    },
    '236': {
      'jp': '236 熱帯雨林の消滅が地球規模で急速に進んでいます。その原因の一つは酸性雨です。',
      'en': "236 Tropical rain forests are quickly disappearing on a global scale. In part, it's due to acid rain."
    },
    '237': {
      'jp': '237 地球温暖化は、二酸化炭素の排出と直接の関係があると言われている。',
      'en': '237 It is said that global warming is directly related to carbon dioxide emissions.'
    },
    '238': {
      'jp': '238 オゾン層の破壊は環境に影響を及ぼす。',
      'en': '238 The destruction of the ozone layer affects the environment.'
    },
    '239': {
      'jp': '239 委員会は、大気汚染を抑制するために互いに協力し合うよう各国に要請した。',
      'en': '239 The committee called on all nations to work side by side to curb air pollution.'
    },
    '240': {
      'jp': '240 溶け続ける氷河を監視するために、人工衛星が軌道に打ち上げられた。',
      'en': '240 A satellite was launched into orbit to monitor melting glaciers.'
    }
  },
  '28': {
    '329': {
      'jp': '329 多くの人々は、現行の義務教育制度が時代遅れであると考えている。',
      'en': '329 Many people regard the current compulsory education system as being obsolete.'
    },
    '330': {
      'jp': '330 大きな目標を実現するようにと、たくさんの人が私を励ましてくれた。',
      'en': '330 Many people encouraged me to fulfill my ambitions.'
    },
    '331': {
      'jp': '331 自分の夢を実現させるために、彼は学校を中退して東京を目指した。',
      'en': '331 To make his dreams come true, he dropped out of school and made his way to Tokyo.'
    },
    '332': {
      'jp': '332 「普段は何をなさっているんですか？」 「大学生です。ハーバードの1年です。」 「専攻は？」 「哲学です。」',
      'en': "332 \"What do you do?\" \"I'm a college student, a freshman at Harvard.\" \"What's your major?\" \"Philosophy.\""
    },
    '333': {
      'jp': '333 2001年4月1日から授業料が10%近く値上げになります。',
      'en': '333 Tuition will be raised by nearly ten percent as of April 1, 2001.'
    },
    '334': {
      'jp': '334 「奨学金を申し込もうかどうか悩んでいるの。」 「やるだけやってみなよ！」',
      'en': "334 \"I'm of two minds whether to apply for the scholarship or not.\" \"Give it a try!\""
    },
    '335': {
      'jp': '335 彼は慶応大学を卒業するとすぐに家業を継いだ。',
      'en': "335 As soon as he graduated from Keio University, he took over his family's business."
    },
    '336': {
      'jp': '336 軍の規律は厳格だから、あなたはそっちの世界に向かないわ。',
      'en': "336 You aren't cut out for the military because of its rigid discipline."
    },
    '337': {
      'jp': '337 私はどんな犠牲を払ってでも、脚本家で食べていくと心に決めている。',
      'en': '337 I am determined to make a living as a playwright at all costs.'
    },
    '338': {
      'jp': '338 彼も大人になって、物事を総合的な視野で見られるようになった。',
      'en': '338 As he grew up, he learned to put things in perspective.'
    },
    '339': {
      'jp': '339 同じような人々からなる私たちの地域社会では、体制に従おうとする意識は不可欠な要素である。',
      'en': '339 Conformity is an essential element of our homogeneous community.'
    },
    '340': {
      'jp': '340 会社のためにあくせく働くよりは、我が道を行くほうがいい。型にはまろうとしたって何の得にもならないよ！',
      'en': "340 I'd rather go my own way than toil away for a company. Trying to fit into a mold gets me nowhere!"
    },
    '341': {
      'jp': '341 トムは性格が彼のおじに似ている。つまりその、生まれつきの頑固者。彼は絶対に折れない。',
      'en': '341 Tom takes after his uncle in personality. I mean, he is obstinate by nature. He never gives in.'
    }
  },
  '24': {
    '282': {
      'jp': '282 どうやらニックは、自分の負担が増えるからその仕事を引き受けたがらなかったようだ。',
      'en': "282 Apparently, Nick wasn't willing to take on the task because it would just add to his burdens."
    },
    '283': {
      'jp': '283 ボブは今夜、彼女とデートするつもりだったが、残業になってしまった。',
      'en': '283 Bob had intended to take her out tonight, but he had to work overtime.'
    },
    '284': {
      'jp': '284 「遅くとも金曜日までには損失の見積りを出して下さい。」 「何とかやってみましょう。」',
      'en': "284 Please estimate the losses by Friday at the latest. \"I'll manage it somehow.\""
    },
    '285': {
      'jp': '285 「頼りにしてるわ、ニック。」 「大丈夫、きちんとやっておきます。」 「ありがとう。感謝するわ。」 「いいんですよ。」',
      'en': "285 \"Nick, I'm counting on you.\" \"OK, I'll see to it.\" \"Thanks, I appreciate it.\" \"Don't mention it.\""
    },
    '286': {
      'jp': '286 彼は上司がそばにいる時は熱心なふりをする。',
      'en': '286 He pretends to be enthusiastic when his boss is around.'
    },
    '287': {
      'jp': '287 彼は同僚を踏み台にして出世した。恥を知るべきだ。',
      'en': '287 He got promoted at the expense of his colleagues. He should be ashamed of himself.'
    },
    '288': {
      'jp': '288 景気の後退が始まると、短期契約社員たちは次々に一時解雇を言い渡された。',
      'en': '288 As the recession set in, temporary employees were laid off one after another.'
    },
    '289': {
      'jp': '289 最近では、多くの人々が職に就きたくても就けないでいる。誰の責任だろう？',
      'en': '289 Nowadays, many people are out of work against their will. Who is responsible for that?'
    },
    '290': {
      'jp': '290 私も悲観的になってきて、以前は決して気にならなかったことに不安を感じている。',
      'en': "290 I've gotten pessimistic, and I'm worried about something I would never have been concerned about before."
    },
    '291': {
      'jp': '291 今日では、サラリーマンでさえ大変な苦難に直面している。',
      'en': '291 Today, even white-collar workers are confronted with great hardships.'
    },
    '292': {
      'jp': '292 当局は通貨を安定させようと懸命だが、どうにもならない。',
      'en': '292 The authorities are striving in vain to stabilize the currency.'
    },
    '293': {
      'jp': '293 日本の膨大な赤字を削減することが何よりも緊急を要することだ、という結論に我々は達した。',
      'en': "293 We've come to the conclusion that nothing is more urgent than reducing Japan's huge deficit"
    }
  },
  '30': {
    '354': {
      'jp': '354 ニックはその報酬に満足していない。彼は自己中心的で欲が深い。',
      'en': '354 Nick is by no means satisfied with the reward. He is selfish and greedy.'
    },
    '355': {
      'jp': '355 「全部で200ドル貸してるの、ボブ。いつ返すつもりなの？」 「ごめん、金欠なんだ。」 「またなの？」',
      'en': "355 \"You owe me \$200 altogether, Bob. When are you going to pay me back?\" \"I'm sorry. I'm hard up.\" \"There you go again!\""
    },
    '356': {
      'jp': '356 ブライアンが驚いたことに、借金はかなりの額になっていた。',
      'en': "356 To Brian's surprise, his debt amounted to a considerable sum."
    },
    '357': {
      'jp': '357 過去の栄光にしがみつくのはやめないと、取り残されるわよ。',
      'en': "357 Stop clinging to your glory days, or you'll be left behind."
    },
    '358': {
      'jp': '358 今日の厳しい現実からは逃れられない以上、それに順応しなければならない。',
      'en': "358 You cannot escape from today's harsh realities, so you must adapt to them."
    },
    '359': {
      'jp': '359 繁栄は永遠に続くものではない。つまり、いつかは終わりを迎えるものだ。',
      'en': '359 Prosperity does not last forever. In other words, it will come to an end one of these days.'
    },
    '360': {
      'jp': '360 その職種には相応の資格や能力が必要で、コンピューターが使えることは絶対条件である。',
      'en': '360 Proper qualifications are required for the position; computer literacy is a must.'
    },
    '361': {
      'jp': '361 この封筒に履歴書も入れて人事部に提出して下さい。',
      'en': '361 Enclose your resume in this envelope and submit it to the personnel department.'
    },
    '362': {
      'jp': '362 物事がうまく行くと信じるなんて君も楽観的だね。可能性はせいぜい50%だよ。',
      'en': "362 It's optimistic of you to believe that things will work out. At best there's a fifty-fifty chance."
    },
    '363': {
      'jp': '363 登録用紙は無料で入手できます。',
      'en': '363 Registration forms can be obtained free of charge.'
    },
    '364': {
      'jp': '364 この講習会に参加をご希望の方は、今すぐお電話下さい。',
      'en': '364 Please give us a call now if you want to participate in the workshop!'
    },
    '365': {
      'jp': '365 さらにご質問がありましたら、どうぞご遠慮なくフリーダイヤル1-800-555-1212までお電話ください。',
      'en': '365 For further inquiries, please feel free to contact us toll-free at 1-800-555-1212.'
    }
  },
  '25': {
    '294': {
      'jp': '294 アンケート用紙が無作為に配布された。',
      'en': '294 The questionnaires were distributed at random.'
    },
    '295': {
      'jp': '295 以下の空欄部分にご記入いただくだけで結構です。（黒または青インクではっきりと書いて下さい）',
      'en': '295 All you have to do is fill in the blanks below. (Please print in black or blue ink.)'
    },
    '296': {
      'jp': '296 10%の割引に加えて、無料のオプションツアーを一つ選択できます。',
      'en': '296 In addition to a 10% discount, you can pick out an optional excursion for free.'
    },
    '297': {
      'jp': '297 各目的地までの往復料金は下記の通りです。',
      'en': '297 Round-trip fares to each destination are as follows.'
    },
    '298': {
      'jp': '298 「事前に予約の確認をするのを忘れないでね。」 「ええ。」',
      'en': "298 \"Don't forget to confirm your reservation in advance.\" \"I won't.\""
    },
    '299': {
      'jp': '299 遅くとも出発時刻の45分前には搭乗手続きを必ず完了させて下さい。',
      'en': '299 Be sure to check in at least 45 minutes prior to departure time.'
    },
    '300': {
      'jp': '300 自分の荷物に名札を付けたけれども、すぐに取れてしまった。',
      'en': '300 I attached my name tag to my baggage, but it soon came off.'
    },
    '301': {
      'jp': '301 これらの小包の重さは平均すると2ポンドです。',
      'en': '301 On average, these packages weigh two pounds.'
    },
    '302': {
      'jp': '302 このビニール製のゴミ袋は有害な化学物質を含んでいません。',
      'en': '302 This plastic garbage bag is free of hazardous chemicals.'
    },
    '303': {
      'jp': '303 この懐中電灯は明かりが弱くなってきた。電池を入れ替えないと。',
      'en': '303 This flashlight is getting dim. It needs new batteries.'
    }
  },
  '23': {
    '273': {
      'jp': '273 明らかにその広告は10代の若者層をターゲットにしている。',
      'en': '273 Obviously, the advertisement is aimed at teenagers.'
    },
    '274': {
      'jp': '274 現在建設中のその工場は、一日当たり1000台のビデオデッキを組立てることになる。',
      'en': '274 The factory now under construction will assemble 1,000 VCR units per day.'
    },
    '275': {
      'jp': '275 効率的な機械が、肉体労働に取って代わった。',
      'en': '275 Efficient machinery replaced manual labor.'
    },
    '276': {
      'jp': '276 当時、その巨大企業が国内の商業を事実上独占していた。',
      'en': '276 In those days, the gigantic corporation had a virtual monopoly over internal commerce.'
    },
    '277': {
      'jp': '277 制限が解除され、数千の新しい企業が誕生した。',
      'en': '277 With restrictions removed, thousands of new enterprises have come into being.'
    },
    '278': {
      'jp': '278 ばかげた新事業の結果、彼は破産の危機に瀕している。',
      'en': '278 As a result of his ridiculous venture, he is in danger of going bankrupt.'
    },
    '279': {
      'jp': '279 昨年と比べて、売上の数字だけを見れば事業は上向いている。しかしながら、利益はまだ全く出ていない。',
      'en': "279 Compared to the previous year, business is looking up in terms of sales. However, we haven't made any profit yet."
    },
    '280': {
      'jp': '280 「海外の支店に転勤することになったよ。」 「えっ。寂しくなるわ。手紙でも下さいね。」',
      'en': "280 \"I'm going to be transferred to an overseas branch.\" \"Oh, I'll miss you. Please drop me a line.\""
    },
    '281': {
      'jp': '281 彼が出張中に、奥さんが男の子の赤ちゃんを出産した。',
      'en': '281 While he was away on business, his wife gave birth to a baby boy.'
    }
  },
  '33': {
    '393': {
      'jp': '393 私たちは政治家というと偽善を連想しがちだ。',
      'en': '393 We tend to associate politicians with hypocrisy.'
    },
    '394': {
      'jp': '394 彼らの一番の関心事は、私たちの生活水準を高めることではなく、私たちから搾取することだ。',
      'en': '394 They are primarily concerned with exploiting us, not with enhancing our living standards.'
    },
    '395': {
      'jp': '395 その男はかつて保守政党に対して支配的影響力を及ぼしていたが、今では彼の力も弱まっている。',
      'en': '395 The man once exerted a dominant influence on the conservative party, but now his power is diminishing.'
    },
    '396': {
      'jp': '396 報道担当者は「調査中です」と言って一切のコメントを拒否した。',
      'en': "396 The spokesperson refused to make any comment, saying, \"It's under investigation.\""
    },
    '397': {
      'jp': '397 背後で糸を引いている人物がいると警察は言っている。',
      'en': "397 The police say there's someone pulling strings behind the scenes."
    },
    '398': {
      'jp': '398 役員たちは何らかの見返りを期待して、官僚たちを料亭、すなわち、高級な日本料理店で接待した。',
      'en': '398 The executives entertained the bureaucrats at ryotei, or exclusive Japanese restaurants, hoping for something in return.'
    },
    '399': {
      'jp': '399 彼の秘書は機密情報をいっさい漏らしていないと明言した。',
      'en': '399 His secretary flatly denied leaking any confidential information.'
    },
    '400': {
      'jp': '400 クビになるのが怖いから、雇用主にあえて逆らおうとする人は誰一人としていない。',
      'en': '400 No one dares to contradict his/her employer for fear of being fired.'
    },
    '401': {
      'jp': '401 彼は自分の尊厳を守るために、将来有望な経歴を犠牲にした。',
      'en': '401 He sacrificed his promising career to retain his dignity.'
    },
    '402': {
      'jp': '402 自分の運命に甘んじるぐらいなら自殺した方がましだ。',
      'en': '402 I might as well kill myself as reconcile myself to my fate.'
    },
    '403': {
      'jp': '403 毒物を飲んで自殺しようとした直前に彼は思いとどまった。',
      'en': '403 He was about to commit suicide by swallowing poison when he thought better of it.'
    }
  },
  '29': {
    '342': {
      'jp': '342 機が熟したら、大胆に突き進むんだ！僕がいつもそばにいる。',
      'en': "342 When the time is ripe, be bold and go for it! I'll stand by you."
    },
    '343': {
      'jp': '343 自分の信念を守るためには立ち上がるし、いかなる脅威にも屈しないつもりだ。',
      'en': "343 I'll stand up for what I believe in and won't yield to any threats."
    },
    '344': {
      'jp': '344 「自分の弱点を克服できさえすればなあ。」 「あなた次第よ。」',
      'en': "344 \"If only I could conquer my weaknesses!\" \"It's up to you.\""
    },
    '345': {
      'jp': '345 自分の才能を示すために、めったにないこの機会を最大限に利用するべきだ。',
      'en': '345 You should make the most of this rare opportunity to demonstrate your talent.'
    },
    '346': {
      'jp': '346 僕をがっかりさせないよね。信頼しているよ。君ならうまくやれるさ！',
      'en': "346 You won't let me down. I have great faith in you. You can make it!"
    },
    '347': {
      'jp': '347 観客たちは彼女の優雅な演技に感動した。',
      'en': '347 The spectators were moved by her graceful performance.'
    },
    '348': {
      'jp': '348 1995年、安藤氏は建築における最も権威ある賞を受賞した。',
      'en': "348 In 1995, Ando received architecture's most prestigious award."
    },
    '349': {
      'jp': '349 逆境をものともせず、マイクはすばらしい偉業を成し遂げた。称賛を受けるのは当然だ。',
      'en': '349 In the face of adversity, Mike accomplished an extraordinary feat. He deserves praise.'
    },
    '350': {
      'jp': '350 聴衆は彼の説得力のある講義に感銘を受けた。',
      'en': '350 The audience was impressed by his eloquent lecture.'
    },
    '351': {
      'jp': '351 庶民の身から、ジョンは世界的な名声を勝ち取った。',
      'en': '351 From a humble background, John achieved worldwide fame.'
    },
    '352': {
      'jp': '352 彼は戦後に莫大な財産を築いた。',
      'en': '352 He accumulated a tremendous fortune during the postwar era.'
    },
    '353': {
      'jp': '353 彼は以前は裕福で気前もよかったけれど、今ではその日暮らしだ。',
      'en': '353 He used to be well off and generous, but now he lives from hand to mouth.'
    }
  },
  '31': {
    '366': {
      'jp': '366 「ボブ、最近どう？」 「最高だよ！就職面接がうまくいったんだ。」 「やったじゃない！」',
      'en': "366 \"How's it going, Bob?\" \"Couldn't be better! I did well in my job interview!\" \"Good for you!\""
    },
    '367': {
      'jp': '367 研修生たちは、彼から与えられた指示がさっぱりわからなかった。',
      'en': "367 He gave instructions to the trainees, but they couldn't make heads or tails of them."
    },
    '368': {
      'jp': '368 一度に二つのことはできないよ。無理に決まってる。一つずつやりなよ。',
      'en': "368 You can't do two things at one time! It's out of the question. Do them one by one."
    },
    '369': {
      'jp': '369 「ボブ、彼女の邪魔をしちゃだめだぞ。ちょっかいを出すなよ。」と彼は小声で言った。',
      'en': "369 \"Bob, don't disturb her. Mind your own business,\" he whispered."
    },
    '370': {
      'jp': '370 そうやってしつこく彼女を困らせると、彼女も怒り出すぞ。',
      'en': "370 If you persist in bothering her like that, she'll lose her temper."
    },
    '371': {
      'jp': '371 彼はあまりに子供だから誘惑に勝てなかった。',
      'en': "371 He was so childish that he couldn't resist temptation."
    },
    '372': {
      'jp': '372 「ぎゃあぎゃあ言うのはやめて。本当にいらいらするわ。」と彼女は叫んだ。',
      'en': '372 \"Stop making a fuss. It really gets on my nerves!\" she shouted.'
    },
    '373': {
      'jp': '373 ニックに口答えしたって無駄だよ。言ってみりゃ彼は独裁者さ。',
      'en': "373 There's no point in talking back to Nick. He is a \"dictator,\" so to speak."
    },
    '374': {
      'jp': '374 彼女たちは彼の前ではとても礼儀正しいが、実際には、いつも陰口を叩いている。',
      'en': '374 They are very polite in his presence, but actually, they always talk about him behind his back.'
    },
    '375': {
      'jp': '375 「ニックを軽蔑しているんだろう？」 「とんでもない！尊敬しているわ。」',
      'en': "375 \"You despise Nick, don't you?\" \"On the contrary! I look up to him.\""
    },
    '376': {
      'jp': '376 彼の絶え間ない侮辱が、彼女の怒りをかき立てた。',
      'en': '376 His constant insults aroused her anger.'
    },
    '377': {
      'jp': '377 書類の整理とかお茶くみには、ほとほとうんざり。会社を辞めることにしたわ！',
      'en': "377 I'm fed up with just shuffling papers and pouring coffee. I've made up my mind to quit!"
    },
    '378': {
      'jp': '378 実際、多くの人々が家計のやりくりに苦労している。月々10万円でどうしたらやっていけるだろう？',
      'en': '378 In reality, many people have difficulty making ends meet. How can you get by on 100,000 yen a month?'
    },
    '379': {
      'jp': '379 女性職員が自分たちの日常業務に不満を言うのももっともだ。全くやりがいの無い仕事だから。',
      'en': '379 Female clerks may well complain about their routines, which are not challenging at all.'
    },
    '380': {
      'jp': '380 抜本的に事業の再構築をおこなったおかげで、当社の黒字は3倍に膨らんだ。',
      'en': '380 Thanks to a fundamental restructuring, our surplus has swelled threefold.'
    },
    '381': {
      'jp': '381 現在の多くの人が、会社に対する忠誠はばかげた考えだと思っている。',
      'en': '381 Many people today think of loyalty to a company as an absurd notion.'
    },
    '382': {
      'jp': '382 僕は遠い郊外からわざわざ通勤しなければならない。もううんざりだ！',
      'en': "382 I have to commute all the way from a distant suburb. I'm sick of it!"
    }
  },
  '26': {
    '304': {
      'jp': '304 すみません。ニューヨーク市街に行くシャトルバスはどの位の間隔で走ってますか？',
      'en': '304 Excuse me. How often do the shuttle buses run to downtown New York?'
    },
    '305': {
      'jp': '305 そのモーテルは400人もの宿泊客を泊められる。',
      'en': '305 The motel can accommodate as many as 400 guests.'
    },
    '306': {
      'jp': '306 このスイートルームは、私の持っているマンションの3倍の広さだ。',
      'en': '306 This suite is three times larger than my condominium.'
    },
    '307': {
      'jp': '307 この施設内でのゴミの投げ捨てには、最高500ドルの罰金が科せられることがあります。',
      'en': '307 Littering in this facility is subject to a maximum fine of \$500.'
    },
    '308': {
      'jp': '308 あのレストランはいつでも混んでいるから、事前に予約をした方がいい。',
      'en': "308 That restaurant is always packed. We'd better make a reservation beforehand."
    },
    '309': {
      'jp': '309 「食事の邪魔をして悪いんだけど、ちょっと内密に話がしたいの。」 「後で君のところに行くよ。」',
      'en': "309 Sorry to interrupt your meal but I'd like a word with you in private. \"Can I get back to you later?\""
    },
    '310': {
      'jp': '310 料理人は彼の信じられないほどの食欲にとても驚いた。',
      'en': '310 The cook was astonished at his incredible appetite.'
    },
    '311': {
      'jp': '311 「下で何が起こっているの？ すごく気になるわ。」 「さあ、何だろう。」',
      'en': "311 \"What's going on down there? I'm curious.\" \"I have no idea.\""
    },
    '312': {
      'jp': '312 興奮したファンたちが、マイケルを一目見ようと裏口に群がっていた。',
      'en': '312 Excited fans were hanging around the rear exit hoping to catch a glimpse of Michael.'
    },
    '313': {
      'jp': '313 彼らは有名人と出くわすなり、サインをねだった。',
      'en': '313 On encountering the celebrity, they asked for his autograph.'
    }
  },
  '35': {
    '419': {
      'jp': '419 我々は、誰であろうとテロ活動に携わる者に寛容でいるつもりはない。',
      'en': '419 We will not tolerate anyone who engages in terrorism.'
    },
    '420': {
      'jp': '420 悪名高い反乱兵はついに捕らえられ、拘置所に身柄を拘束された。',
      'en': '420 The notorious rebel was ultimately captured and confined to jail.'
    },
    '421': {
      'jp': '421 暴動を鎮圧するために、直ちに軍隊が派遣された。',
      'en': '421 Troops were swiftly called in to put down the riot.'
    },
    '422': {
      'jp': '422 私たちは暴力に頼るのではなく、理性に訴えるべきだ。',
      'en': '422 We should appeal to reason instead of resorting to violence.'
    },
    '423': {
      'jp': '423 当分の間は柔軟な戦術をとってみてはどうでしょう。',
      'en': '423 I suggest we adopt flexible tactics for the moment.'
    },
    '424': {
      'jp': '424 軍は全領土を占領することに成功した。',
      'en': '424 The armed forces succeeded in occupying the entire territory.'
    },
    '425': {
      'jp': '425 このような状況では、敵は降伏せざるを得ない。彼らがこれ以上持ちこたえることは不可能だ。',
      'en': "425 Under the circumstances, the enemy has no choice but to surrender. They can't hold out any longer."
    },
    '426': {
      'jp': '426 遅かれ早かれ、人質たちは解放されるだろう。',
      'en': '426 Sooner or later, the hostages will be set free.'
    },
    '427': {
      'jp': '427 専制政治による支配のもとで、罪のない人々が市民権を剥奪された。',
      'en': '427 Under the reign of tyranny, innocent people were deprived of their citizenship.'
    },
    '428': {
      'jp': '428 その命令にいやいや従う兵士もいた。',
      'en': '428 Some soldiers were reluctant to obey the commands.'
    },
    '429': {
      'jp': '429 彼の政権はきっと崩壊する。',
      'en': '429 His regime is bound to collapse.'
    },
    '430': {
      'jp': '430 同盟諸国はその侵略行為が国連決議に違反するものとして、厳しく非難した。',
      'en': '430 The allies condemned the invasion as a violation of UN resolutions.'
    },
    '431': {
      'jp': '431 その国で内乱が勃発する可能性がないとは断言できない。',
      'en': '431 We cannot rule out the possibility that civil war will break out in that country.'
    },
    '432': {
      'jp': '432 その植民地は独立を宣言し、共和国となった。',
      'en': '432 The colony declared independence and became a republic.'
    }
  },
  '34': {
    '404': {
      'jp': '404 その曖昧な噂は嘘だとわかった。だがそれでも、多少の疑いはまだ残る。',
      'en': '404 The vague rumor proved to be false. Nevertheless, some skepticism lingers on.'
    },
    '405': {
      'jp': '405 ある政府高官が企業から賄賂を受け取った容疑をかけられている。しかし、逮捕するには証拠が不十分だ。',
      'en': "405 A senior official is suspected of accepting bribes from a company, but there isn't sufficient evidence to arrest him."
    },
    '406': {
      'jp': '406 そのプロジェクトの責任者であったジェイソンが、汚職に手を染めた理由で解任された。',
      'en': '406 Jason, who was in charge of the project, was dismissed for corruption.'
    },
    '407': {
      'jp': '407 私の知る限り、彼はその詐欺の企みには関与していません。',
      'en': '407 To my knowledge, he has not been involved in the fraud scheme.'
    },
    '408': {
      'jp': '408 関連書類の山を調べていくうちに、彼らは真実をつかんだ。',
      'en': '408 They found out the truth while examining a pile of relevant documents.'
    },
    '409': {
      'jp': '409 彼らが数十年にわたって違法取引を隠蔽していたことが、公判中に明らかになった。',
      'en': '409 During the trial it came to light that they had been covering up illegal transactions for decades.'
    },
    '410': {
      'jp': '410 刑事はその場で、彼の証言を一言一句正確に書き取った。',
      'en': '410 The detective took down his testimony on the spot, word for word.'
    },
    '411': {
      'jp': '411 生まれて初めて良心の呵責を感じましたが、そうする以外にその場をしのぐ方法はありませんでした。',
      'en': '411 For the first time in my life, I felt a pang of conscience, but there was no other way out.'
    },
    '412': {
      'jp': '412 昨日の夜に見た生々しい悪夢がまだ頭から離れない。',
      'en': "412 I'm still haunted by a vivid nightmare I had last night."
    },
    '413': {
      'jp': '413 概して、記者というものは個人のプライバシーを侵害することにためらいを感じない。',
      'en': "413 By and large, reporters don't hesitate to intrude on one's privacy."
    },
    '414': {
      'jp': '414 著者は何度も何度も現稿を手直しした。',
      'en': '414 The author revised his manuscript over and over again.'
    },
    '415': {
      'jp': '415 他人の過ちを指摘することにかけては、彼の右に出るものはいない。',
      'en': '415 He is second to none when it comes to finding fault with others.'
    },
    '416': {
      'jp': '416 概して、エリートたちは批判に対して鈍感だ。',
      'en': '416 On the whole, the elite are not sensitive to criticism.'
    },
    '417': {
      'jp': '417 ある大衆紙に彼は麻薬常用者だと暴露され、彼の評判はほとんど地に落ちた。',
      'en': '417 When a tabloid revealed that he was a drug addict, his reputation was all but ruined.'
    },
    '418': {
      'jp': '418 彼らはその防衛計画をあらゆる面から検討し、多数の問題箇所を指摘した。',
      'en': '418 They considered every aspect of the defense program and pointed out numerous flaws.'
    }
  },
  '36': {
    '433': {
      'jp': '433 その高潔な愛国者に敬意を表して、巨大な記念碑が建てられた。',
      'en': '433 An immense monument was erected in honor of the noble patriot.'
    },
    '434': {
      'jp': '434 彼はひざまずいて故人の霊に祈りを捧げた。',
      'en': '434 He got down on his knees and prayed for the souls of the deceased.'
    },
    '435': {
      'jp': '435 最高裁判所は皇居の近くにある。',
      'en': '435 The Supreme Court is located near the Imperial Palace.'
    },
    '436': {
      'jp': '436 中絶合法賛成派グループが中絶の禁止に対して抗議した。',
      'en': '436 The pro-choice group protested against a ban on abortion.'
    },
    '437': {
      'jp': '437 フォード上院議員はその激しい論争において、中立の立場を守った。',
      'en': '437 Senator Ford remained neutral in the bitter controversy.'
    },
    '438': {
      'jp': '438 フォード氏はここ一週間ずっと困難な立場に置かれている。もはや、彼にはどうすることもできない。',
      'en': '438 Ford has been in a difficult situation all week long. He is no longer capable of coping with it.'
    },
    '439': {
      'jp': '439 首脳会談は世界中で同時に放送される予定だ。',
      'en': '439 The summit talks are to be broadcast simultaneously throughout the world.'
    },
    '440': {
      'jp': '440 外交的対話のおかげでその紛争に終止符を打つことができた。',
      'en': '440 Diplomatic dialogue helped put an end to the conflict.'
    },
    '441': {
      'jp': '441 両国の相互理解を深めるために、ジョンソンさんが親善大使に任命された。',
      'en': '441 Johnson was appointed as a goodwill ambassador to foster understanding between the two nations.'
    },
    '442': {
      'jp': '442 その専門家は国際的な緊張が高まっていくと予測している。',
      'en': '442 The specialist predicts international tension will build up.'
    },
    '443': {
      'jp': '443 私の考えでは、恒久的な平和など幻想に過ぎない。',
      'en': '443 In my opinion, permanent peace is nothing but an illusion.'
    },
    '444': {
      'jp': '444 民族的少数派は偏見、貧困、抑圧と戦っている。',
      'en': '444 Ethnic minorities struggle against prejudice, poverty, and oppression.'
    },
    '445': {
      'jp': '445 すべての差別をなくすために、私たちはあらゆる努力をしなければならない。',
      'en': '445 We must make every effort to do away with all discrimination.'
    },
    '446': {
      'jp': '446 移民たちは肉体的、精神的苦痛に耐えてきた。',
      'en': '446 The immigrants have endure physical and mental pain.'
    },
    '447': {
      'jp': '447 その改正案は、人種の多様性を考慮していないとの理由で却下された。',
      'en': "447 The amendment was rejected because it didn't take racial diversity into account."
    },
    '448': {
      'jp': '448 言うまでもなく、難民たちは自由を強く求めていた。',
      'en': '448 Needless to say, the refugees were longing for freedom.'
    }
  },
  '39': {
    '466': {
      'jp': '466 通路の向こうから、誰かが私をじっと見ているのに気付いたので振り向いた。しかし、誰の姿も見えなかった。',
      'en': '466 I became aware of someone staring at me from across the aisle, so I turned around. But there was no one in sight.'
    },
    '467': {
      'jp': '467 何者かに腕をつかまれ、彼女は怖くて悲鳴を上げた。',
      'en': '467 She screamed with horror as someone took hold of her arm.'
    },
    '468': {
      'jp': '468 彼女の無事を知らされて、彼は安堵のため息をついた。',
      'en': '468 Informed of her safety, he breathed a sigh of relief.'
    },
    '469': {
      'jp': '469 銃弾が胸を貫通し、彼は危篤状態に陥った。',
      'en': '469 The bullet penetrated his chest, leaving him in critical condition.'
    },
    '470': {
      'jp': '470 そうなったのが故意なのか過失なのか、現在のところまだはっきりしない。',
      'en': "470 At present, it's still uncertain whether it was done deliberately or by accident."
    },
    '471': {
      'jp': '471 デリカエッセンから火災が発生し、灰の山を残して全焼した。',
      'en': '471 A deli caught fire and burned down, leaving a heap of ashes.'
    },
    '472': {
      'jp': '472 花火の貯蔵庫が突然爆発し、激しい炎を鎮めるまでに2日間を要した。',
      'en': '472 All of a sudden the fireworks warehouse exploded, and it took two days to put out the blaze.'
    },
    '473': {
      'jp': '473 30階建てのビルで爆弾が爆発し、50人以上が重傷を負った。',
      'en': '473 A bomb went off in a thirty-story building, and more than fifty people were seriously wounded.'
    },
    '474': {
      'jp': '474 アテネへ向かう一隻の貨物船が、何の痕跡も残さずに地中海で沈没した。',
      'en': '474 A cargo vessel, bound for Athens, sank in Mediterranean without a trace.'
    },
    '475': {
      'jp': '475 無謀な男たちが南極探検中に凍死した。',
      'en': '475 The reckless men froze to death during their expedition to the Antarctic.'
    },
    '476': {
      'jp': '476 同じことが繰り返されないように、その悲劇を忘れてはならない。',
      'en': '476 The tragedy must be remembered so as not to be repeated.'
    }
  },
  '32': {
    '383': {
      'jp': '383 余生は自分の理想の追求に費やしたい。',
      'en': '383 I want to spend the rest of my life pursuing my ideals.'
    },
    '384': {
      'jp': '384 現役を引退した後、テレサは孤児の世話に一身を捧げた。',
      'en': '384 After retirement, Teresa devoted herself to caring for orphans.'
    },
    '385': {
      'jp': '385 困っている子どもたちのために、私たちは募金活動に協力した。',
      'en': '385 For the sake of children in need, we cooperated to collect donations.'
    },
    '386': {
      'jp': '386 その慈善団体には、およそ20億円の寄付をした人物の名前が付けられている。',
      'en': '386 The charity is named after a man who gave away some two billion yen.'
    },
    '387': {
      'jp': '387 彼の自叙伝が今日発売され、午前中に完売した。',
      'en': '387 His autobiography was released today and was sold out by noon.'
    },
    '388': {
      'jp': '388 高潔な人物だと度々称されるテッドが、市長に立候補する。',
      'en': '388 Ted, who is often referred to as a man of integrity, is going to run for mayor.'
    },
    '389': {
      'jp': '389 その候補者は選挙結果に落胆した。',
      'en': '389 The candidate was disappointed by the outcome of the election.'
    },
    '390': {
      'jp': '390 市議会は具体的な問題にもっと焦点を当てるべきだ。',
      'en': '390 The municipal council should concentrate more on specific issues.'
    },
    '391': {
      'jp': '391 年金生活者が厳しい生活を強いられているというのは事実です。',
      'en': '391 It is the case that those who live on a pension are forced to lead a hard life.'
    },
    '392': {
      'jp': '392 このデータは除外した方がいい。正確と言うにはほど遠いものだ。',
      'en': "392 We should leave out this data. It's far from accurate."
    }
  },
  '43': {
    '518': {
      'jp': '518 ちょっと時間を割いてくれませんか？二人にとって大事なことを話し合いたいんです。',
      'en': "518 Can you spare a minute? I'd like to discuss something of importance to both of us."
    },
    '519': {
      'jp': '519 あなたには些細なことに思えるかもしれませんが、私にとってそれは注意すべきことなんです。',
      'en': "519 It may seem trivial to you but for me it's worth paying attention to."
    },
    '520': {
      'jp': '520 ボブについて言えば、彼はどんなことでも受け入れるタイプだが、対照的にジェーンはとても慎重派だ。',
      'en': '520 As far as Bob is concerned, anything goes. By contrast, Jane is very cautious.'
    },
    '521': {
      'jp': '521 気まずい沈黙の後、ビルは彼女の手を取って上の階に引っ張って行った。',
      'en': '521 After an awkward pause, Bill took her by the hand and dragged her upstairs.'
    },
    '522': {
      'jp': '522 ビルはただモニカを慰めたかっただけなのに、彼女は彼が自分に気があるのだと解釈した。',
      'en': '522 Bill just wanted to comfort Monica, but she interpreted it as romantic interest.'
    },
    '523': {
      'jp': '523 彼女が熟睡しているのを確かめて、彼はこっそり部屋を抜け出して旅立った。',
      'en': '523 After making sure she was sound asleep, he crept out of the room and set off.'
    },
    '524': {
      'jp': '524 ここだけの話だけど、リサ、女の人を熱く抱擁してるニックを見ちゃったんだ。',
      'en': '524 Between you and me, Lisa, I came across Nick passionately embracing a woman.'
    },
    '525': {
      'jp': '525 そういう発言は誤解を招きやすい。',
      'en': '525 Such a remark is open to misunderstanding.'
    },
    '526': {
      'jp': '526 「もう我慢できないっ！」「落ち着けよ。すぐそこに行くから。」',
      'en': "526 \"I can't stand it anymore!\" \"Calm down. I'll come over as soon as possible.\""
    },
    '527': {
      'jp': '527 そんなこと真に受けちゃだめだよ。彼は大げさに言う傾向があるから。',
      'en': "527 Don't take it literally. He is inclined to exaggerate."
    },
    '528': {
      'jp': '528 「リサを馬鹿にしたことを謝るべきだわ。今回はやりすぎよ。」「ああ、そうするよ。その内彼女の機嫌が直ったらね。」',
      'en': "528 \"You should apologize to Lisa for making fun of her. You went too far this time.\" \"Yeah .. I will, sometime when she's in a better mood.\""
    },
    '529': {
      'jp': '529 「リサ、ニックとうまくやってる？」「時々、離婚を考えることがあるわ。」「冗談だろ！」',
      'en': '529 Lisa, are you getting along with Nick? \"Once in a while, I think of divorcing him.\" \"You must be kidding!\"'
    },
    '530': {
      'jp': '530 彼女は泣きながら、彼からの手紙をめちゃくちゃに引き裂いて捨てた。',
      'en': '530 In tears, she tore up his letter and threw it away.'
    }
  },
  '38': {
    '457': {
      'jp': '457 警察はその残虐な殺人事件の手がかりを捜している。',
      'en': '457 The cops are searching for clues to the brutal murder.'
    },
    '458': {
      'jp': '458 その男は頭がおかしいに違いない。善悪の区別がつけられないんだ。',
      'en': "458 The man must be insane. He can't distinguish vice from virtue."
    },
    '459': {
      'jp': '459 凶器に残された指紋は容疑者のものと一致する。',
      'en': "459 The fingerprints left on the weapon correspond with the suspect's."
    },
    '460': {
      'jp': '460 その著名な心理学者が誘拐罪で訴えられたことに、私たちはみな驚いた。',
      'en': '460 It took us all by surprise when the noted psychologist was accused of kidnapping.'
    },
    '461': {
      'jp': '461 陪審団による有罪評決が大論争の引き金となった。',
      'en': "461 The jury's guilty verdict gave rise to widespread debate."
    },
    '462': {
      'jp': '462 男は情報酌量を求めたが、犯した罪に対して20年の懲役刑が言い渡された。',
      'en': '462 The man pleaded for mercy, but he was sentenced to twenty years in prison for his crime.'
    },
    '463': {
      'jp': '463 勤務中の警官は、一人のお年寄りが自分の背後に近づいてくるのに気付いた。',
      'en': '463 The officer on duty perceived an elderly man coming up behind him.'
    },
    '464': {
      'jp': '464 彼はその家に押入ろうとしている泥棒を目にした。',
      'en': '464 He caught sight of a thief attempting to break into the house.'
    },
    '465': {
      'jp': '465 おととい、彼はその原野で奇妙な出来事を目撃した。',
      'en': '465 The day before yesterday he witnessed a weird incident in the wilderness.'
    }
  },
  '41': {
    '492': {
      'jp': '492 かなりの数の人々が、その夫婦の結婚記念のお祝いに招待されている。',
      'en': "492 Quite a few people have been invited to celebrate the couple's anniversary."
    },
    '493': {
      'jp': '493 もうすぐ準備完了です。その間、軽食をご自由につまんでください。',
      'en': "493 It won't be long before everything is ready. In the meantime, help yourself to some snacks."
    },
    '494': {
      'jp': '494 けばけばしい奇妙な服を着ていた彼女は、人混みの中でもひときわ目立った。',
      'en': '494 Dressed in a loud and peculiar outfit, she stood out in the crowd.'
    },
    '495': {
      'jp': '495 招かれた人は皆、彼女のもてなしに心を打たれた。',
      'en': '495 All the guests were touched by her hospitality.'
    },
    '496': {
      'jp': '496 彼女のよれよれの服は、その場にはふさわしくなかった。',
      'en': '496 Her shabby clothes were not suitable for the occasion.'
    },
    '497': {
      'jp': '497 たまたま知り合った人たちと話すには、その話題は立ち入り過ぎている。',
      'en': '497 That topic is too intimate to share with casual acquaintances.'
    },
    '498': {
      'jp': '498 トムは酔っぱらうと下品になって、人に不快な思いをさせるから、近づいちゃだめだよ。',
      'en': '498 When Tom gets drunk, he gets crude and offensive. Stay away from him.'
    },
    '499': {
      'jp': '499 彼女がほのめかしていることを彼はほとんど理解できなかった。',
      'en': '499 He could hardly comprehend what she was implying.'
    },
    '500': {
      'jp': '500 女の子の前でからかわれて、ボブは恥ずかしかった。',
      'en': '500 Bob felt embarrassed when he was teased in front of some girls.'
    },
    '501': {
      'jp': '501 彼の曖昧な返事はなおさら彼女をいらいらさせた。',
      'en': '501 His ambiguous reply made her all the more irritated.'
    },
    '502': {
      'jp': '502 ボブはとても臆病で女の子とおしゃべりすると赤面してしまう。',
      'en': '502 Bob is very timid and blushes when chatting with girls.'
    },
    '503': {
      'jp': '503 ニックは地方出身者なら誰であろうと見下している。',
      'en': '503 Nick looks down on anyone who comes from a rural area.'
    },
    '504': {
      'jp': '504 「どうしたの、ボブ？そんなに暗い顔をして。」「ほっといてくれよ。君には関係ないことだ。」',
      'en': "504 \"What's the matter, Bob? You look so miserable.\" \"Leave me alone. It's none of your business.\""
    },
    '505': {
      'jp': '505 ボブは変装していたけれども、一目で彼だとわかった。',
      'en': '505 Although Bob was in disguise, I recognized him at a glance.'
    },
    '506': {
      'jp': '506 「何をくすくす笑ってるんだ？」「ボブ、トレーナーが後ろ前だよ。」「あっ！」',
      'en': '506 \"What are you chuckling about?\" \"Bob, you have your sweatshirt on backwards!\" \"Oops!\"'
    }
  },
  '40': {
    '477': {
      'jp': '477 その展覧会に行くと古代文明に対する深い理解が得られる。',
      'en': '477 The exhibition offers profound insights into ancient civilization.'
    },
    '478': {
      'jp': '478 イタリアンルネッサンスを開花させるきっかけを作ったのはジョットの功績だ。',
      'en': '478 Giotto is credited with sowing the seeds of the Italian Renaissance.'
    },
    '479': {
      'jp': '479 ボブは装飾された額にその肖像画を収めたけれど、上下逆さまだった。',
      'en': '479 Bob mounted the portrait in a fancy frame, but it was upside down.'
    },
    '480': {
      'jp': '480 この荘厳な大聖堂の建立は中世にまでさかのぼる。',
      'en': '480 This magnificent cathedral dates back to the Middle Ages.'
    },
    '481': {
      'jp': '481 アジアの宗教から閃きを得て、彼は複数のすばらしい彫刻作品を生み出した。',
      'en': '481 Asian religions inspired him to create splendid sculptures.'
    },
    '482': {
      'jp': '482 彼らは埋蔵された宝物を求めて砂漠を探検した。',
      'en': '482 They explored the desert in search of buried treasure.'
    },
    '483': {
      'jp': '483 たとえいくらかかろうともその傑作を手に入れると、その大富豪は言い張った。',
      'en': '483 The millionaire insisted on acquiring the masterpiece no matter how it cost.'
    },
    '484': {
      'jp': '484 神話や伝説は代々語り継がれていくべきだ。',
      'en': '484 Myths and legends should be handed down from generation to generation.'
    },
    '485': {
      'jp': '485 その言語学者はいくつかの中国語の方言を流暢に話す。',
      'en': '485 The linguist is fluent in several Chinese dialects.'
    },
    '486': {
      'jp': '486 その部族は祖先を崇拝し、私たちにはなじみのない独自の言語を話す。',
      'en': '486 The tribe worships its ancestors and speaks its own language, which is not familiar to us.'
    },
    '487': {
      'jp': '487 その州ではいまだに古い慣習が根強い、とその文化人類学者は言っている。',
      'en': '487 The anthropologist says old customs still prevail in the province.'
    },
    '488': {
      'jp': '488 意地の悪い魔女が男にとんでもない魔法をかけて、虫に変えてしまった。',
      'en': '488 The wicked witch cast an evil spell on the man and turned him into a bug.'
    },
    '489': {
      'jp': '489 その険しい小道に沿って彼らは前進した。それは国境へたどり着く唯一の方法だった。',
      'en': '489 They proceeded along the steep path, which was the sole access to the border.'
    },
    '490': {
      'jp': '490 洞窟から大きな猿が現れると、彼らはびっくりして逃げて行った。',
      'en': '490 When a big ape emerged from the cave, they got frightened and ran away.'
    },
    '491': {
      'jp': '491 「信じてくれないかもしれないけど、宇宙人を見たの。で、消えちゃったのよ！」 「冗談はよせよ。」',
      'en': '491 \"Believe it or not, I saw an alien and then it vanished!\" \"Give me a break!\"'
    }
  },
  '37': {
    '449': {
      'jp': '449 ある調査によると、今日では5人中3人が外交問題には無関心だそうだ。',
      'en': '449 According to a survey, three in five people are indifferent to foreign affairs.'
    },
    '450': {
      'jp': '450 安全保障条約が期限切れになったら、日米関係はどうなるだろう？',
      'en': '450 What will become of Japan-U.S. relations if the security treaty expires?'
    },
    '451': {
      'jp': '451 日本が不公平な関税を撤廃しなければ、米国は制裁措置を取るだろう。',
      'en': '451 Unless Japan eliminates its unfair tariffs, the U.S. will impose sanctions.'
    },
    '452': {
      'jp': '452 両国の間では貿易摩擦がいつ生じてもおかしくない。',
      'en': '452 Trade friction might arise between the two nations at any moment.'
    },
    '453': {
      'jp': '453 我々の最優先事項はこの論争にきっぱりと決着を付けることだ。そのためには相手側との妥協も覚悟している。',
      'en': '453 Our top priority is to settle this dispute once and for all, so we are ready to meet them halfway.'
    },
    '454': {
      'jp': '454 連邦予算はかろうじて議会の承認を得た。',
      'en': '454 The federal budget was narrowly approved by Congress.'
    },
    '455': {
      'jp': '455 政府は別の歳入源を探さなければいけない、と彼は主張している。',
      'en': '455 He argues that the administration must look for alternative sources of revenue.'
    },
    '456': {
      'jp': '456 世論調査の結果から、圧倒的多数の人がその法律を支持していることがわかる。',
      'en': '456 A poll shows that an overwhelming majority is in favor of the legislation.'
    }
  },
  '42': {
    '507': {
      'jp': '507 彼は友達作りが苦手で、いつもひとりぼっちでいる。',
      'en': '507 He is not good at making friends and always keeps to himself.'
    },
    '508': {
      'jp': '508 自分が受け入れられる場所を見つけられず、彼は極度の不安と孤独に陥っていた。',
      'en': '508 Having found no place he felt he belonged, he was extremely uneasy and lonely.'
    },
    '509': {
      'jp': '509 新しい環境に順応するのはかなり大変なことだとわかった。',
      'en': '509 I found it pretty hard to adjust to my new surroundings.'
    },
    '510': {
      'jp': '510 ああいう洗練された人たちの中で、自分はまったく場違いな気がした。',
      'en': '510 I felt utterly out of place among those sophisticated people.'
    },
    '511': {
      'jp': '511 正直言って、私はクラシック音楽は好きじゃない。かたや、モリーのほうは完全にはまっている。',
      'en': "511 To tell the truth, I don't like classical music. On the other hand, Molly is really into it."
    },
    '512': {
      'jp': '512 ボブは昆虫の観察に楽しみを感じている。',
      'en': '512 Bob derives pleasure from observing insects.'
    },
    '513': {
      'jp': '513 「気分転換にトランプか何かしない？」「わるいけど、そういう気分じゃないよ。」',
      'en': "513 \"How about playing cards or something for a change?\" \"Sorry, I'm not up for it.\""
    },
    '514': {
      'jp': '514 「お先にどうぞ。」「いや、あなたの方こそお先にどうぞ。」「すみません。」「どういたしまして。」',
      'en': "514 \"After you.\" \"No pleasure, you go ahead.\" \"Thanks.\" \"You're welcome.\""
    },
    '515': {
      'jp': '515 彼の姪は年の割には社交的で大人だ。二十代と言っても通用する。',
      'en': '515 His niece is sociable and mature for her age. She could pass for twenty-something.'
    },
    '516': {
      'jp': '516 「じゃあね。家族のみんなによろしく。」「ああ。またね。」',
      'en': '516 \"Take care of yourself and say hi to your family for me.\" \"I will. See you later.\"'
    },
    '517': {
      'jp': '517 お返事頂けるのを楽しみにしております。敬具',
      'en': "517 I'm looking forward to hearing from you. Sincerely,"
    }
  },
  '44': {
    '531': {
      'jp': '531 「ジェニファーにだまされた！」「彼女を信じないくらいの分別があっても良かったのに。」',
      'en': '531 \"Jennifer deceived me!\" \"You should have known better than to trust her.\"'
    },
    '532': {
      'jp': '532 トムは自分の人生の多くを無駄にしてきたことを後悔した。',
      'en': '532 Tom regretted having wasted a great deal of his life.'
    },
    '533': {
      'jp': '533 自分の思春期を振り返ると、いつも憂鬱な気分になる。',
      'en': '533 I cannot look back on my adolescence without feeling depressed.'
    },
    '534': {
      'jp': '534 「ジェニファーが俺をふって他の男のところにいったよ。」「えっ、それは辛いわね。」「そうでもないよ。慣れてるよ。」',
      'en': "534 \"Jennifer left me for another guy.\" \"Oh, you must be upset.\" \"Not really. I'm used to it.\""
    },
    '535': {
      'jp': '535 「彼女が見送りに来なかったのも当然だよ。」「どうして？」「二人は別れたんだ。」「えっ、かわいそうに！」',
      'en': "535 \"No wonder she didn't show up to see him off.\" \"How come?\" \"They broke up.\" \"Oh, what a pity!\""
    },
    '536': {
      'jp': '536 「ここで自分一人だけ生きていくなんて拷問だ」と彼はすすり泣きして言った。',
      'en': '536 \"Living here all by myself is torture!\" he sobbed.'
    },
    '537': {
      'jp': '537 「正直言うと私、ケンに夢中なの。だって、勇敢で自分に自信を持っていて、それに危険を冒すことを決して恐れないでしょ。」「私ならデートに誘うわ。」',
      'en': "537 \"To be honest, I'm crazy about Ken because he's brave, self-confident, and never afraid of taking risks. \" \"If I were you, I'd ask him out!\""
    },
    '538': {
      'jp': '538 「ずいぶん長い間、ジェニファーとは付き合ったり別れたりの繰り返しだよ。」「相変わらず優柔不断ね。そろそろ落ち着いたらどう？」',
      'en': "538 \"I've been going with Jennifer on and off for ages.\" \"You're as indecisive as ever. Isn't it \""
    },
    '539': {
      'jp': '539 「ジェニファーにずっとだまされていたのが分かってきたよ。」「何てうぶなの。彼女の本性が見抜けなかったの？」',
      'en': "539 \"It dawned on me that I had been taken in by Jennifer all along.\" \"How naive! Didn't you see through her?\""
    },
    '540': {
      'jp': '540 実際、彼女は誰かと付き合っているけれども、僕は彼女を諦めない。',
      'en': "540 Even though she is seeing someone else, I won't give her up."
    },
    '541': {
      'jp': '541 「やあ、ジェーン。最近どう？」「別に。あなたは？」「ジェニファーと結婚したんだ。」「ええっ、おめでとう！」',
      'en': "541 \"Hi, Jane. What's up?\" \"Not much. How about you?\" \"I got married to Jennifer.\" \"Wow! Congratulations!\""
    },
    '542': {
      'jp': '542 大変なことがあったり、落ち込んだりしたときはいつでも、私があなたのそばにいるわ。',
      'en': "542 Whenever you're in trouble or feeling down, I'll be there for you."
    },
    '543': {
      'jp': '543 「喜び」は「悲しみ」の反対です。',
      'en': '543 \"Delight\" is the opposite of \"sorrow.\"'
    },
    '544': {
      'jp': '544 「ジェニファーは僕をばか呼ばわりまでして、しかもそれを撤回しないんだ。」「自業自得よ！あなたからけしかけたんでしょう？」',
      'en': "544 \"Jennifer went so far as to call me an idiot and she wouldn't take it back.\" \"Serves you right! You provoked her, didn't you?\""
    },
    '545': {
      'jp': '545 「彼女の傲慢さにどうして我慢しているの？利用されているだけよ。」「うるさい！」',
      'en': "545 \"Why do you put up with her arrogance? She's just taking advantage of you. \"Shut up!\""
    },
    '546': {
      'jp': '546 慌てなくていいですよ。そのことをじっくり考えるには、2、3日必要でしょうから。',
      'en': '546 Take your time. I know you need a couple of days to reflect on it.'
    },
    '547': {
      'jp': '547 ボブは自分の力でこの厳しい試練を乗り切らなければいけない。',
      'en': '547 Bob has to get through this ordeal on his own.'
    }
  },
  '45': {
    '548': {
      'jp': '548 ハエと蚊が彼の瞑想の邪魔をした。',
      'en': '548 Flies and mosquitoes interfered with his meditation.'
    },
    '549': {
      'jp': '549 2度の延期の後、その神聖な儀式は執り行われた。',
      'en': '549 The sacred ritual took place after being postponed twice.'
    },
    '550': {
      'jp': '550 お坊さんが突然大声で笑い出し、厳粛な雰囲気を台無しにした。',
      'en': '550 All at once, the Buddhist priest burst into laughter, spoiling the solemn atmosphere.'
    },
    '551': {
      'jp': '551 咳、くしゃみ、あくびをするときは口を手で隠しなさい。',
      'en': '551 Cover your mouth when you cough, sneeze, or yawn.'
    },
    '552': {
      'jp': '552 「彼女の親戚が3日前に亡くなったんだ。」「えっ、それは大変ね。お気の毒だわ。」',
      'en': "552 \"One of her relatives passed away three days ago.\" \"Oh, that's too bad. I'm so sorry.\""
    },
    '553': {
      'jp': '553 彼女は葬儀に参列するだけでなく、すべての段取りをつけなければならない。',
      'en': '553 Besides attending the funeral, she needs to make all the arrangements.'
    },
    '554': {
      'jp': '554 「ジェーン、気持ちは分かるよ。悲しみはすぐに消えるものじゃない。」「大丈夫。乗り越えてみせるわ。',
      'en': "554 \"I feel for you, Jane. Grief doesn't fade away quickly.\" \"I'm OK. I'll get over it.\""
    },
    '555': {
      'jp': '555 彼女は子供の頃のかけがえのない思い出を大切にしている。',
      'en': '555 She cherishes the precious memories of her childhood.'
    },
    '556': {
      'jp': '556 「ジェニファーと言えば、彼女、実業家と婚約したんだよ。」「あきれてものが言えないわ。破談にならなきゃいいけどね。」',
      'en': "556 \"Speaking of Jennifer, she got engaged to a businessman.\" \"I'm at a loss for words! I hope she won't break it off.\""
    },
    '557': {
      'jp': '557 近頃では、結婚の動機は必ずしも純粋とは限らない。例えば、ジェニファーを見てごらんよ。',
      'en': '557 These days, the motives for marriage are not necessarily pure. Take Jennifer for example.'
    },
    '558': {
      'jp': '558 ボブにはやさしく接してあげてくれよ。ほら、彼は最近ずっと辛いこと続きなんだ。',
      'en': "558 Go easy on Bob. You know, he's been going through a rough period recently."
    },
    '559': {
      'jp': '559 「ところで、今何時？」「えーっと、8時15分前だよ。」',
      'en': "559 \"By the way, do you have the time?\" \"Let's see .. it's a quarter to eight.\""
    },
    '560': {
      'jp': '560 「ボブ、今日はこの辺までにしましょう。お腹がぺこぺこ。」「ああ。晩飯は僕がおごるよ。」',
      'en': "560 \"Let's call it a day, Bob. I'm starved.\" \"Yep. I'll buy you dinner.\""
    }
  }
};