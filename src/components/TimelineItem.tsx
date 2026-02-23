import type { MileStone } from "../App";

type TimelineItemProps = {
  marco: MileStone;
  isLeft: boolean;
  onClick: () => void;
};

export function TimelineItem({ marco, isLeft, onClick }: TimelineItemProps) {
  return (

      <div className="w-5/12"></div>


      <div
        onClick={onClick}
      >
          <img
            src={marco.imagem}
            alt={marco.titulo}
            }`}
          />
        </div>

            {marco.ano}
          </span>
            {marco.titulo}
          </h3>
            {marco.descricao}
          </p>
          </div>
        </div>
      </div>
  );
}