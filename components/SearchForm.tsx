import { MunicipalitieType, Prefecture } from "@/types/components";
import { prefectures } from "@/utils/prefectures";

export interface FormProp {
  selectedIds: Set<number>;
  onPerfectureSelected: (id: number) => void;
}

const SearchForm = ({ selectedIds, onPerfectureSelected }: FormProp) => {
  const forms = prefectures.filter((item) => selectedIds.has(item.id));

  return forms.map((item) => (
    <PrefectureForm key={item.id} prefecture={item}></PrefectureForm>
  ));
};

type PrefectureFormProp = {
  prefecture: Prefecture;
};

const PrefectureForm = ({ prefecture }: PrefectureFormProp) => {

    const specialWard = prefecture.municipalities


  return (
    <div className="border p-1">
      <div>
        <Checkbox label={prefecture.name_en}></Checkbox>
      </div>
      <div className="flex flex-wrap">
        {specialWard.map((item) => (
          <Checkbox
            key={item.id}
            label={item.name_en + item.type}
            className="basis-1/4"
          ></Checkbox>
        ))}
      </div>
    </div>
  );
};

const Checkbox = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <label className="w-full p-2 font-semibold text-lg cursor-pointer flex items-center justify-start rounded gap-1">
        <input
          type="checkbox"
          className="w-6 h-6 text-orange-600 bg-gray-100 border-gray-300 rounded-md focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default SearchForm;
